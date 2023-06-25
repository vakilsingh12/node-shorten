const { getUser } = require("../service/auth");

async function restrictToUserLogin(req, res, next) {
  //   const uuid = req.cookies.uid;
  const uuid = req.headers["authorization"];

  if (!uuid) return res.status(404).json({ msg: "please login frist" });
  const token = uuid.split("Bearer ")[1];
  const user = getUser(token);
  if (!user) return res.status(404).json({ msg: "please login frist" });
  req.user = user;
  next();
}
function restrictTo(roles = []) {
  return function (req, res, next) {
    console.log(req.user,roles)
    if(!req.user || !roles.includes(req.user.role)) return res.status(404).json("something went wrong")
    return next();
  };
}
module.exports = {restrictToUserLogin,restrictTo};
