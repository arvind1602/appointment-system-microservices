import app from "./app.js";
import db from "./DB/database.js";

try {
  app.listen(8001, () => {
    console.log(`🚀 Server is running on port 8001`);
  });
} catch (error) {
  console.log("mongodb connection failed  : ", error);
}
