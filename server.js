import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
app.use(cors());

import mongoose from "mongoose";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import router from "./routes/employee.js";

app.use("/api/employee", router);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();

app.listen(port, () => console.log(`Server is started on port ${port}`));
