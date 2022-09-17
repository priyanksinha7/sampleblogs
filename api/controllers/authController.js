const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const cloudinary=require("cloudinary");

module.exports.registerUser=async (req, res) => {

    try {
      let myCloud;
       if(!req.body.profile)
       {
         myCloud=
         {
          public_id:"avatars/gekksu4w2rwac1thpgin",
          secure_url:"https://res.cloudinary.com/djrfgt7gi/image/upload/v1663402759/avatars/gekksu4w2rwac1thpgin.png"
         }
       }
       else{
       myCloud = await cloudinary.v2.uploader.upload(req.body.profile, {
        folder: "avatars",
        width: 150,
        crop: "scale",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        profile: {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        },
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
      });
         console.log(newUser);
      const user = await newUser.save();
      console.log(user)
  res.status(200).json(user);
  return;
    } catch (err) {
     res.status(500).json(err);
     return;
    }
  }

  module.exports.loginUser= async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if(!user)
      { 
        res.status(400).json("Wrong credentials!");
        return;
    }
  
      const validated = await bcrypt.compare(req.body.password, user.password);
      if(!validated) 
      { 
        res.status(400).json("Wrong credentials!");
        return;
      }
     
      const { password, ...others } = user._doc;
     return res.status(200).json(others);

    } catch (err) {
     return res.status(500).json(err);
    }
  }

