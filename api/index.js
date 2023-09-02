const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const catRoute = require("./routes/categories");

const app = express();

dotenv.config();

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("connected to mongo"))
  .catch((error) => console.error(error));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/v1/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/v1/post", postRoute);
app.use("/v1/categories", catRoute);

app.listen("3000", () => {
  console.log("server running!");
});
