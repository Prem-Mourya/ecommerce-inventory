import express from "express";
import cors from "cors";
import { UsersRoutes } from "./app/modules/users/user.routes.js";
import { ProductRoutes } from "./app/modules/products/product.routes.js";
import { OrdersRoutes } from "./app/modules/orders/order.routes.js";
const app = express();
// parsers option
app.use(express.json());
app.use(cors());
// routes
app.use("/api/users", UsersRoutes); // users routes
app.use("/api/products", ProductRoutes); // products routes
app.use("/api/orders", OrdersRoutes); // orders routes
export default app;
//# sourceMappingURL=app.js.map