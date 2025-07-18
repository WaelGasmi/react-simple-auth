import express from "express";
import {
  login,
  register,
  logout,
  checkUser,
} from "../controllers/authController.js";
import { loginLimiter } from "../utils/rateLimiter.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/me", verifyToken, checkUser);

export default authRouter;
