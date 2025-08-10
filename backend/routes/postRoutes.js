const express = require("express");
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePosts,
  deletePost,
} = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPostById);

router.post("/", authMiddleware, createPost);
router.put("/:id", authMiddleware, updatePosts);
router.delete("/:id", authMiddleware, deletePost);

module.exports = router;
