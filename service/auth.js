const sessionIdToUserMap = new Map();
const jwt = require("jsonwebtoken");
const secret = "vakil$Singh98523@123";
const setUser = (user) => {
  // sessionIdToUserMap.set(id,user)
//   console.log(user)
  return jwt.sign({ _id: user._id, email: user.email }, secret);
};
function getUser(token) {
  // return sessionIdToUserMap.get(id)
  try{
  return jwt.verify(token, secret);
  }catch(err){
    return null;
  }
}

module.exports = { setUser, getUser };
