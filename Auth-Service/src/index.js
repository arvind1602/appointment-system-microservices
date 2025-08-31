import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import app from "./app.js";
import connectDB from "./DB/db.connection.js";

connectDB()
  .then(() => {
    console.log("mongodb connected successfully !");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("mongodb connection failed  : ", error);
  });
