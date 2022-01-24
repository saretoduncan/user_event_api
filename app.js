import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userAuth_routes from "./src/routes/userRoutes.js";
import events_routes from "./src/routes/eventsRoutes.js";

const app = express();
//config
dotenv.config();
//port
const port = process.env.PORT || 5000;

//db_connection
mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("db connected successfully");
});
//middlewares
app.use(express.json());
app.use("/api/user", userAuth_routes);
app.use("/api/event", events_routes);

app.listen(port, () =>
  console.log(`server is running on port http://localhost:${port}`),
);
