const router = require("express").Router();
const apiFeatures=require("../utils/apiFeatures");
const Post=require("../models/Post");
router.get("/", async(req,res)=>
{
    if(req.query.keyword){
   let searchOpts=  {
       title: {
         $regex: req.query.keyword,
         $options: "i",
       },
     };
     let searchedValues=await Post.find({...searchOpts});
     res.status(200).json({
      success: true,
      searchedValues
    });
    return;
    }
});



module.exports = router;