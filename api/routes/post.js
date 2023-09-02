const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//create
router.post("/:id", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});
//update
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You are not authorized to update this post!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
//delete
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json("Post not found!");
      return;
    }
    if (post.username === req.body.username) {
      try {
        await post.deleteOne();
        res.status(200).json("Post deleted!");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You are not authorized to delete this post!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
//get one
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});
//get all
router.get("/", async (req, res) => {
  const username = req.query.user; //mentioned like /?user=... in url
  const cat = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username: username });
    } else if (cat) {
      posts = await Post.find({
        categories: {
          $in: [cat],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
