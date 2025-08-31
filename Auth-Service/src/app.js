import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

//router import
import userRouter from "./routers/User.Router.js";

//routes declaration
app.use("/api/users", userRouter);

export default app;
