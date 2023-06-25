const { getUser } = require("../service/auth");

async function restrictToUserLogin(req, res, next) {
  const uuid = req.cookies.uid;
  if (!uuid) return res.status(404).json({ msg: "please login frist" });
  const user = getUser(uuid);
  if (!user) return res.status(404).json({ msg: "please login frist" });
  req.user = user;
  next();
}
module.exports=restrictToUserLogin;
