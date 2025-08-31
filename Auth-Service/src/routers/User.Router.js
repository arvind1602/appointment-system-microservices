import { Router } from "express";
import {
  createUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/").get((req, res) => {
  res.status(200).send("user route is working");
});

router.route("/create-user").post(createUser);
router.route("/login-user").post(loginUser);
router.route("/logout-user").get(verifyToken, logoutUser);
router.route("/refresh-token").post(refreshAccessToken)

export default router;
