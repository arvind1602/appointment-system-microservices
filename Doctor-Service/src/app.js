import express from "express";
import doctorRoute from "./routers/doctor.router.js";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use("/api/doctors", doctorRoute);

export default app;
