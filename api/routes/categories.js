const router = require("express").Router();
const { newCategory,findCategory } = require("../controllers/categoriesController");
const Category = require("../models/Category");

router.post("/",newCategory);

router.get("/", findCategory);

module.exports = router;
