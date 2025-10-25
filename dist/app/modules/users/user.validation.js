import { z } from "zod";
const UserValidationSchema = {
    email: z.string({ message: "Email is required" }).nonempty(),
    password: z.string({ message: "Password is required" }).nonempty(),
    role: z.string(),
};
export default UserValidationSchema;
//# sourceMappingURL=user.validation.js.map