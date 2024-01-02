import express from "express";
import mongoose from "mongoose";
import resourceRouter from "./src/routes/resource.js";
const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://robertas123:robertas123@cluster0.3ovwkp9.mongodb.net/resources-api"
  )
  .then(() => console.log("Connected to DB!"))
  .catch((err) => {
    console.log(err);
  });

app.use(resourceRouter);

app.listen(3000);
