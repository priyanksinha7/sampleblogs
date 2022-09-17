const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const { deleteUser, updateUser,getUser } = require("../controllers/userController");

//UPDATE
router.put("/:id",updateUser );

//DELETE
router.delete("/:id",deleteUser);

//GET USER
router.get("/:id",getUser);

module.exports = router;
