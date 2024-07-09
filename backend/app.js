import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import mongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import router from "./src/routes/api.js";

dotenv.config();
const app = new express();
app.disable("x-powered-by");
app.use(cookieParser());
app.use(express.json({ limit: process.env.MAX_JSON_SIZE }));
app.use(
  express.urlencoded({
    limit: process.env.MAX_URL_ENCODED_SIZE,
    extended: false,
  })
);

app.use(
  rateLimit({
    windowMs: process.env.REQ_LIMIT_TIME,
    limit: process.env.REQ_LIMIT_NUMBER,
  })
);
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());

//Connect to DB
mongoose
  .connect(process.env.MONGO_URI, { autoIndex: true })
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", function (req, res) {
  res.send(
    '<h1 style="display: flex; align-items: center; justify-content: center; margin-top:50px">Hello from QP</h1>'
  );
});

app.use("/api", router);

export default app;
