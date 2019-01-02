const express = require("express");
const { body } = require("express-validator/check");

const feedController = require("../controllers/feed");

const router = express.Router();

router.get("/post", feedController.getPosts);

router.post(
  "/post",
  [
    body("title")
      .trim()
      .isLength({ min: 5 }),
    body("content")
      .trim()
      .isLength({ min: 5 })
  ],
  feedController.postPost
);

router.get("/post/:postId", feedController.getPost);

module.exports = router;
