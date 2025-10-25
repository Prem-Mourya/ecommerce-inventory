import { Router } from "express";
import { OrderController } from "./order.controller.js";
const router = Router();
router.post("/createOrder", OrderController.createOrder);
router.get("/", OrderController.getOrders);
router.put("/", OrderController.updateOrder);
router.delete("/", OrderController.deleteOrder);
export const OrdersRoutes = router;
//# sourceMappingURL=order.routes.js.map