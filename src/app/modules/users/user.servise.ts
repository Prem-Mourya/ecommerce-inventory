import bcrypt from "bcryptjs";
import { UserModel } from "./user.molel.js";

const findUserByEmail = async (email: string) => {
  return await UserModel.findOne({ email: email });
};

const registerUser = async (email: string, password: string, role: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await UserModel.create({
    email,
    password: hashedPassword,
    role,
  });
  return await user.save();
};

const ValidatePassword = async (
  inputPassword: string,
  userPassword: string
) => {
  return bcrypt.compare(inputPassword, userPassword);
};

export const UserService = {
  findUserByEmail,
  registerUser,
  ValidatePassword,
};
