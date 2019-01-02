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
  const { title, content } = req.body;
  res.status(201).json({
    message: "Post created successfully!",
    post: {
      _id: new Date().toISOString(),
      title,
      content,
      creator: { name: "Max" },
      createdAt: new Date()
    }
  });
};
