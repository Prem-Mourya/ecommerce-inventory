import mongoose from "mongoose";
import app from "./app.js";
import config from "./app/config/index.js";

const PORT = config.PORT;
const DB_URL = config.DB_URL;

async function main() {
  try {
    await mongoose.connect(DB_URL as string);
    console.log("Mongodb is connected successfully!");

    app.listen(PORT, () => {
      console.log(`[INFO]: Server started on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit the process if DB connection fails
  }
}

main();
