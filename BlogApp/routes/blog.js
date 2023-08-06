const express = require('express');
const { createPost, getPost } = require('../controllers/postController');
const { createComment } = require('../controllers/commentController');
const { likePost, unlikePost } = require('../controllers/likeController');
const router = express.Router();

router.post("/posts/create",createPost);
router.get("/posts",getPost);
router.post("/comments/create",createComment);
router.post("/likes/like",likePost);
router.delete("/likes/unlike",unlikePost);

module.exports = router;