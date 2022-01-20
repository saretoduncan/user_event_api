import { User } from "../models/user_model.js";
import bcrypt from 'bcrypt'
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
export const login=()=>{};
export const updateUser=()=>{};