//IMPORTS
const User = require("../Models/User");
const CryptoJS = require("crypto-js");
const { enc } = require("crypto-js");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
//REGISTER
router.post("/register", async (req, res) => {
  try {
    const newUser = User({
      username: req.body.username,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
      email: req.body.email,
    });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    !user && res.status(401).json("wrong creditencials");
    const hashedPass = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const passw = hashedPass.toString(CryptoJS.enc.Utf8);
    passw !== req.body.password && res.status(401).json("wrong creditencials");
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "999d" }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});
//EXPORT
module.exports = router;
