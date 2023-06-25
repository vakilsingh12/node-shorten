const express = require("express");
const urlRouter = require("./routes/url");
const userRouter = require("./routes/user");
const cookieParser = require("cookie-parser");
const {restrictToUserLogin,restrictTo} = require("./middleware/auth");
const app = express();
const PORT = 2300;
app.use(express.json());
app.use(cookieParser());
// app.use(restrictToUserLogin)
app.use("/api", urlRouter);
app.use("/api", userRouter);
app.listen(PORT, (req, res) => {
  console.log(`Server started at port ${PORT}!`);
});
