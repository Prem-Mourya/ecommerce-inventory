import { success } from "zod";
export const isAdmin = (req, res, next) => {
    const userRole = req.decoded.role;
    if (userRole !== "admin") {
        return res.status(403).json({
            success: false,
            message: "You are not authorized to perform this action.",
        });
    }
    next();
};
//# sourceMappingURL=adminMiddleware.js.map