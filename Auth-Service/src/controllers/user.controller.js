import User from "../models/User.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

// Helper function to set cookies with environment-aware options
const setAuthCookies = (res, accessToken, refreshToken) => {
  const isProduction = process.env.NODE_ENV === "production";

  const options = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "Strict" : "Lax",
  };

  return res
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options);
};

// Generates tokens and stores refresh token in DB
const generate_token = async (user) => {
  try {
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refresh_token = refreshToken;
    await user.save();

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      "Something went wrong while generating refresh and access tokens",
      500
    );
  }
};

// Register new user
const createUser = async (req, res) => {
  try {
    const { username, email, fullname, password } = req.body;

    if (!username || !email || !fullname || !password) {
      throw new ApiError("All fields are required", 400);
    }

    const existedUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existedUser) {
      throw new ApiError("Username or email already exists", 409);
    }

    const newUser = await User.create({
      username,
      email,
      fullname,
      password,
      verification: false,
    });

    const userObj = newUser.toObject();
    delete userObj.password;
    delete userObj.refresh_token;

    return res
      .status(201)
      .json(new ApiResponse(userObj, "User registered successfully", 201));
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.message || "An error occurred while creating user",
    });
  }
};

// User login
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new ApiError("Username and password are required", 400);
    }

    const user = await User.findOne({ username });
    if (!user) {
      throw new ApiError("Invalid credentials", 401);
    }

    const isPasswordMatch = await user.isPasswordValid(password);
    if (!isPasswordMatch) {
      throw new ApiError("Invalid credentials", 401);
    }

    const { accessToken, refreshToken } = await generate_token(user);

    const userObj = user.toObject();
    delete userObj.password;
    delete userObj.refresh_token;

    setAuthCookies(res, accessToken, refreshToken);

    return res
      .status(200)
      .json(new ApiResponse(userObj, "User login successful", 200));
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message:
        error.message || "An error occurred while trying to login the user",
    });
  }
};

// Logout user and clear refresh token
const logoutUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      throw new ApiError("User not found", 400);
    }

    user.refresh_token = null;
    await user.save();

    const isProduction = process.env.NODE_ENV === "production";
    const options = {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "Strict" : "Lax",
    };

    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(new ApiResponse(null, "User logged out successfully", 200));
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.message || "An error occurred while logging out",
    });
  }
};

// Refresh access token
const refreshAccessToken = async (req, res) => {
  try {
    const refreshToken =
      req.cookies?.refreshToken || req.headers.authorization?.split(" ")[1];

    if (!refreshToken) {
      throw new ApiError("Refresh token is required", 401);
    }

    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    const user = await User.findById(decoded?.id);
    if (!user) {
      throw new ApiError("Invalid refresh token", 400);
    }

    if (refreshToken !== user.refresh_token) {
      throw new ApiError("Refresh token has expired or been used", 403);
    }

    const { accessToken, refreshToken: newRefreshToken } =
      await generate_token(user);

    setAuthCookies(res, accessToken, newRefreshToken);

    return res
      .status(200)
      .json(new ApiResponse(null, "Access token refreshed successfully", 200));
  } catch (error) {
    return res.status(error.statusCode || 400).json({
      message: error?.message || "Invalid refresh token",
    });
  }
};

export { createUser, loginUser, logoutUser, refreshAccessToken };
  