import app from "./app.js";
import config from "./app/config/index.js";

const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(`[INFO]: Server started on port ${PORT}`);
});
