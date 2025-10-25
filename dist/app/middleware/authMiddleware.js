import jwt from "jsonwebtoken";
import config from "../config/index.js";
const JWT_SECRET = config.JWT_SECRET;
export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
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
        req.decoded = decoded;
        next();
    });
};
//# sourceMappingURL=authMiddleware.js.map