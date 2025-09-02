import express from "express";

const app = express();
const PORT = process.env.PORT || 4200;

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`[INFO]: Server started on port ${PORT}`);
});
