import { User } from "../models/user_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
//configurations
dotenv.config();
export const sign_up = async (req, res) => {
  const { name, gender, email, password } = req.body;
  //validate email exist
  const emailExist = await User.findOne({ email: email });
  if (emailExist) return res.status(400).json("email already exists");
  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create new user schema
  const new_User = new User({
    name: name,
    email: email,
    gender: gender.toLowerCase(),
    password: hashedPassword,
  });
  try {
    const user = await new_User.save();
    res.json(user);
  } catch (err) {
    res.json(err.message);
  }
};
//login
export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user)
    return res.status(400).json("email is not registered to our system");
  const correctPassword = await bcrypt.compare(password, user.password);
  if (!correctPassword) return res.status(400).json("password is incorrect");
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  const userInfo = [
    {
      name: user.name,
      auth_token: token,
    },
  ];
  res.header("auth_token").json(userInfo);
};
export const updateUser = (req,res) => {
  // const(name,emai)
};
