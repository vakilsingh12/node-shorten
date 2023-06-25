const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const { setUser, getUser } = require("../service/auth");
const handleUsersignup = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({ name, email, password });
  return res.status(201).json({ msg: "user registered with email ", email });
};
const handleUserlogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.status(404).json({ msg: "username & password wrong" });
  //   const sessionId = uuidv4();
  //   setUser(sessionId,user);
  let token = setUser(user);
//   res.cookie("uid", token);
  return res.status(200).json({ msg: "login successfully", user,token });
};
module.exports = { handleUsersignup, handleUserlogin };
