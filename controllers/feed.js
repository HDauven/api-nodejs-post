const { validationResult } = require("express-validator/check");

const Post = require("../models/post");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        creator: { name: "Max" },
        createdAt: new Date(),
        content: "This is the first post!",
        imageUrl: "images/fred.png"
      }
    ]
  });
};

exports.postPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "Validation failed, entered data is incorrect.",
      errors: errors.array()
    });
  }

  const { title, content } = req.body;
  const post = new Post({
    title,
    content,
    imageUrl: "images/fred.png",
    creator: { name: "Max" }
  });
  post
    .save()
    .then(result => {
      res.status(201).json({
        message: "Post created successfully!",
        post: result
      });
    })
    .catch(err => {
      console.log(err);
    });
};
