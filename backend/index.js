import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
mongoose.connect(process.env.MONGODB_URL).then(() => {console.log("Connected to MongoDB")}).catch(err => console.log(err));
const app = express();
const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
