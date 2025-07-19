import authRouter from "./authRoute.js";

export const setupRoutes = (app) => {
  app.use("/auth", authRouter);
};
