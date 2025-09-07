import { Router } from "express";
import {
  dataById,
  getAllData,
} from "../controllers/AppointmentData.controller.js";

const router = Router();

router.route("/").get(getAllData);
router.route("/:id").post(dataById);

export default router;
