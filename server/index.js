import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(8000, () => {
  console.log("listening on http://localhost:8000");
});

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Database Connected Successfully!");
  })
  .catch((error) => {
    console.log(error);
  });

//   Routes
import PropertyRouter from "./routes/Property.route.js";
import UserRouter from "./routes/User.route.js";

app.use("/api/listings", PropertyRouter);
app.use("/api/user", UserRouter);
