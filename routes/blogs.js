var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth')
var blogsController = require('../controllers/blogs')

/* GET home page. */
router
    .get('/', blogsController.findAllBlogs)
    .post('/',auth.auth,blogsController.createArticle)
    .put('/:id/comment',auth.auth,blogsController.commentPost)
    .put('/:id/likes',auth.auth,blogsController.likePost)


    .get('/dummy',auth.auth,(req,res)=>{
        res.send('masuk nih cuy')
    })

module.exports = router;
