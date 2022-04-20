import express from "express";
import { config } from "dotenv";
import ErrorHandler from "./middleware/errorHandler.js";
import mongoose from "mongoose";
config();
const app = express();
const serverPort = process.env.SERVER_PORT;
app.use(express.json());
app.get("/", (req, res) => {
  mongoose.connect("mongodb://localhost:27017/error-test");
  const response = mongoose.find({});
  res.status(200).send({ response });
});
app.use(ErrorHandler);
app.listen(serverPort);
