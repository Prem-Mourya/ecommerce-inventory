import bcrypt from "bcryptjs";
import { UserModel } from "./user.molel.js";
const findUserByEmail = async (email) => {
    return await UserModel.findOne({ email: email });
};
const registerUser = async (email, password, role) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
        email,
        password: hashedPassword,
        role,
    });
    return await user.save();
};
const ValidatePassword = async (inputPassword, userPassword) => {
    return bcrypt.compare(inputPassword, userPassword);
};
export const UserService = {
    findUserByEmail,
    registerUser,
    ValidatePassword,
};
//# sourceMappingURL=user.servise.js.map