import jwt from "jsonwebtoken";
import config from "../config/index.js";
import type { NextFunction, Request, Response } from "express";

const JWT_SECRET = config.JWT_SECRET as string;

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1] as string;

  if (!token) {
    res
      .status(401)
      .send({ message: "Invalid token, Access denied. Login please" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      res
        .status(401)
        .send({ message: "Invalid token, Access denied. Login please" });
      return;
    }
    (req as any).decoded = decoded;
    next();
  });
};
