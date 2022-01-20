import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"

const app = express();
//config
dotenv.config();
//port
const port = process.env.PORT || 5000;
//db_connection
mongoose.connect(process.env.MONGODB_URI,()=>{
    console.log('db connected successfully')
})
//server
app.listen(port, () =>
  console.log(`server is running on port http://localhost:${port}`),
);
