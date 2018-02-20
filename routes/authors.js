var express = require('express');
var router = express.Router();
var authController = require('../controllers/authors')
var authAdmin = require('../middlewares/authadmin')
var auth = require('../middlewares/authadmin')

router
  .post('/', authAdmin.auth,authController.createAuthor)
  .get('/',authController.findAll)
  .put('/',authAdmin.auth,authController.editAuthor)
  .delete('/:id', authAdmin.auth,authController.deleteAuthor)
  .get('/:id', authAdmin.auth,authController.findOne)

  // .get('/lol',authAdmin.auth, (req, res) => {
  //   res.send('masuk nih cuy')
  // })

module.exports = router;
