import express from "express";
import cors from "cors";
import helmet from "helmet";
import { setupRoutes } from "./routes/setupRoutes.js";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/errorHandler.js";
import { CLIENT_URL } from "./config/index.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);
app.use(cookieParser());

setupRoutes(app);

app.use(errorHandler);

export default app;
