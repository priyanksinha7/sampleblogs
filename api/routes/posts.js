const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const { getAllPosts, getPost, deletePost, createPost, updatePost, addComment } = require("../controllers/postController");

//CREATE POST
router.post("/",createPost);
router.post("/:id/comment",addComment);
//UPDATE POST
router.put("/:id",updatePost);

//DELETE POST
router.delete("/:id",deletePost );

//GET POST
router.get("/:id", getPost);

//GET ALL POSTS
router.get("/", getAllPosts);

module.exports = router;
