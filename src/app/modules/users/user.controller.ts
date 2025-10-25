import { UserService } from "./user.servise.js";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../../config/index.js";

const JWT_SECRET = config.JWT_SECRET as string;

const registerUser = async (req: Request, res: Response) => {
  const { email, password, role } = req?.body;
  try {
    // Checking user is already exist or not
    const userExists = await UserService.findUserByEmail(email);
    if (!userExists) {
      const setRole = role || "user";
      const registeredUser = await UserService.registerUser(
        email,
        password,
        setRole
      );
      res
        .status(200)
        .send({ message: "User registration successful", registeredUser });
      return;
    }

    res.status(409).json({
      success: false,
      message: "User already exists",
    });
  } catch (error) {
    res.status(500).send({ message: "User registration failed!" });
  }
};

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await UserService.findUserByEmail(email);
    if (!user) {
      return res.status(400).send({ message: "Invalid email or password" });
    }
    const userEmail = user.email;
    const userPassword = user.password;
    const userRole = user.role;

    const isValidPassword = await UserService.ValidatePassword(
      password,
      userPassword
    );

    if (!isValidPassword) {
      res.status(400).send({
        message:
          "Invalid password, Please write correct password or try reset your password and write or save it somewhere.",
      });
      return;
    }

    const token = jwt.sign({ email: userEmail, role: userRole }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).send({ message: "user login successfully", token });
  } catch (error) {
    res.status(500).send({ message: "User Login failed", error });
  }
};

export const UserController = {
  registerUser,
  loginUser,
};
