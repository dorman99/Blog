var express = require('express');
var router = express.Router();
var authController = require('../controllers/authors')
/* GET users listing. */

router
  .post('/',authController.createAuthor)
  .get('/',authController.findAll)
  .put('/',authController.editAuthor)
  .delete('/:id',authController.deleteAuthor)
  .get('/:id',authController.findOne)

module.exports = router;
