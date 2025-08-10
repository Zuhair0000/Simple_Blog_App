const db = require("../db");

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  const author_id = req.user.id; // fixed typo

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  try {
    const result = await db.query(
      "INSERT INTO posts(title, content, author_id) VALUES (?, ?, ?)",
      [title, content, author_id]
    );

    res
      .status(201)
      .json({ message: "Post created successfully", postId: result.insertId });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const [allPosts] = await db.query(
      "SELECT * FROM posts ORDER BY created_at DESC"
    );

    res.json(allPosts);
  } catch (err) {
    console.error("❌ Get posts error:", err);
    return res.status(500).json({ message: err.message });
  }
};

exports.getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const [results] = await db.query("SELECT * FROM posts WHERE id = ?", [id]);

    if (results.length === 0)
      return res.status(404).json({ message: "Post not found" });

    res.json(results[0]);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.updatePosts = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const author_id = req.user.id;
  try {
    const [results] = await db.query("SELECT * FROM posts WHERE id = ?", [id]);
    if (results.length === 0)
      return res.status(404).json({ message: "Post not found" });

    if (results[0].author_id !== author_id) {
      return res
        .status(403)
        .json({ message: "You can only edit your own posts" });
    }

    await db.query("UPDATE posts SET title = ?, content = ?", [title, content]);
    res.json({ message: "Post updated seccessfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  const author_id = req.user.id;

  try {
    const [results] = await db.query("SELECT * FROM posts WHERE id = ?", [id]);

    if (results.length === 0) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (results[0].author_id !== author_id) {
      return res
        .status(403)
        .json({ message: "You can only delete your own posts" });
    }

    await db.query("DELETE FROM posts WHERE id = ?", [id]);

    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
