const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const { getAllPosts, getPost, deletePost, createPost, updatePost } = require("../controllers/postController");

//CREATE POST
router.post("/",createPost);

//UPDATE POST
router.put("/:id",updatePost);

//DELETE POST
router.delete("/:id",deletePost );

//GET POST
router.get("/:id", getPost);

//GET ALL POSTS
router.get("/", getAllPosts);

module.exports = router;
