import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "./middlewares/errorHandler.js";
import { setupRoutes } from "./routes/setupRoutes.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

setupRoutes(app);

app.use(errorHandler);

app.listen(port, () => {
  console.clear();
  console.log(`server running at ${port}`);
});
