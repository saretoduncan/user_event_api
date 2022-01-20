import express from "express";
import { sign_up, login, updateUser } from "../controllers/user_controller.js";
const route = express.Router();
route.post("/register", sign_up);
route.post("/login", login), route.patch("/update", updateUser);
export default route;
