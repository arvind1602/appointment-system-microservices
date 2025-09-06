import { Router } from "express";
import { doctorList } from "../controllers/DoctorData.controllers.js";

const router = Router();

router.route("/").get(doctorList);

export default router;
