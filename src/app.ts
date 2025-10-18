import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Prem! Ecommerce Inventory Server is running");
});

export default app;
