import rateLimit from "express-rate-limit";

export const loginLimiter = rateLimit({
  windowMs: 1000 * 60 * 15,
  max: 4,
  message: "Too many login attemps. Please try again later",
  standardHeaders: true,
  legacyHeaders: false,
});
