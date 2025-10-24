import { model, Schema } from "mongoose";
import type { TUser } from "./user.interface.js";

export const UserSchema = new Schema<TUser>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

export const UserModel = model<TUser>("user", UserSchema);
