const { getUser } = require("../service/auth");

async function restrictToUserLogin(req, res, next) {
//   const uuid = req.cookies.uid;
  const uuid = req.headers['authorization'];
   
  if (!uuid) return res.status(404).json({ msg: "please login frist" });
  const token=uuid.split("Bearer ")[1];
  const user = getUser(token);
  if (!user) return res.status(404).json({ msg: "please login frist" });
  req.user = user;
  next();
}
module.exports=restrictToUserLogin;
