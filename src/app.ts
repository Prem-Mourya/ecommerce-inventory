import express from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/products/product.routes.js";
const app = express();

// parsers option
app.use(express.json());
app.use(cors());

// routes
app.use("/api/products", ProductRoutes);

app.get("/", (req, res) => {
  res.send("Hello Prem! Ecommerce Inventory Server is running");
});
export default app;
