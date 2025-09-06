import { Router } from "express";
import {
  createUser,
  deleteUserbyId,
  doctorList,
  getUserById,
} from "../controllers/DoctorData.controllers.js";

const router = Router();

router.route("/").get(doctorList);
router.route("/:id").get(getUserById);
router.route("/create").post(createUser);
router.route("/delete/:id").delete(deleteUserbyId);

export default router;
