const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
    comments: [
      {
        user: {
          type: String,
          ref: "User",
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
         createdAt:
         { 
          type: Date,
          default: Date.now()
         }
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
