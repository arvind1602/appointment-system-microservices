import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";
import User from "../models/User.model.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token =
      req.cookies.accessToken || req.headers.authorization?.split(" ")[1];
    if (!token) {
      throw new ApiError("Access Token is Required", 400);
    }
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decoded?.id).select(
      "-password -refreshToken"
    );
    if (!user) {
      throw new ApiError("Invalid Access Token");
    }
    req.user = user;
    await user.save();
    next();
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message || "An error occurred while verifying token",
    });
  }
};
