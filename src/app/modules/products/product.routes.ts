import express from "express";
import { ProductController } from "./product.controller.js";
import { verifyToken } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", ProductController.getProducts);
router.post("/createSingleProduct", ProductController.createProducts);
router.get("/:productId", verifyToken, ProductController.getProductById);
router.put("/:productId", ProductController.updateProductById);
router.delete("/:productId", ProductController.deleteProductById);
export const ProductRoutes = router;
