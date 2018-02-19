var express = require('express');
var router = express.Router();
var blogsController = require('../controllers/blogs')

/* GET home page. */
router
    .get('/', blogsController.findAllBlogs)
    .post('/',blogsController.createArticle)
    .put('/:id/comment',blogsController.commentPost)
    .put('/:id/likes',blogsController.likePost)

module.exports = router;
