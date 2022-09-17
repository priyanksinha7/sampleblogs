const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const {registerUser, loginUser}=require("../controllers/authController");
//REGISTER
router.post("/register", registerUser);

//LOGIN
router.post("/login",loginUser);

module.exports = router;
