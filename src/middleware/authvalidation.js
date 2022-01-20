import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.header("auth_token"); //get token from header
  if (!token) return res.status(401).json("please login first");
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.json(err.message);
  }
};
export default auth;
