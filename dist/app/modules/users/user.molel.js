import { model, Schema } from "mongoose";
export const UserSchema = new Schema({
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
export const UserModel = model("user", UserSchema);
//# sourceMappingURL=user.molel.js.map