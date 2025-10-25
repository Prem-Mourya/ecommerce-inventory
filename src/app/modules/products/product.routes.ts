import express from "express";
import { ProductController } from "./product.controller.js";
import { verifyToken } from "../../middleware/authMiddleware.js";
import { isAdmin } from "../../middleware/adminMiddleware.js";

const router = express.Router();

router.get("/", ProductController.getProducts);
router.post(
  "/createSingleProduct",
  verifyToken,
  ProductController.createProducts
);
router.get("/:productId", ProductController.getProductById);
router.put("/:productId", verifyToken, ProductController.updateProductById);
router.delete(
  "/:productId",
  verifyToken,
  isAdmin,
  ProductController.deleteProductById
);
export const ProductRoutes = router;
