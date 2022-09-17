const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const searchBlog = require("./routes/searchBlog");
const multer = require("multer");
const path = require("path");
const cors=require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");
dotenv.config();
app.use(express.json());
app.use(fileUpload());

app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect("mongodb+srv://priyank:priyank2001@sampleblogs.awgln1p.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  cloudinary.config({
    cloud_name: "djrfgt7gi",
    api_key: "376339792771188",
    api_secret: "3bp64f9kObNKQhrUf7fxWq3JvWM",
  });
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/search", searchBlog);

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});
app.listen(process.env.PORT||5000, () => {
  console.log("Backend is running.");
});

