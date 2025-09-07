import app from "./app.js";

try {
  app.listen(8002, () => {
    console.log(`🚀 Server is running on port 8001`);
  });
} catch (error) {
  console.log("Mysql connection failed  : ", error);
}
