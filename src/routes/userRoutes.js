import express from "express";
import { sign_up, login, updateUser } from "../controllers/user_controller.js";
import {
  signUpValidation,
  loginValidation,
  validateResults,
} from "../middleware/validatation.js";
const route = express.Router();
route.post("/register", signUpValidation(), validateResults, sign_up);
route.post("/login", login), route.patch("/update", updateUser);
export default route;
