var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var authorSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: {type:String,required:true}
  },{timestamps:{createdAt:'created_At'}});


  authorSchema.plugin(uniqueValidator);
var Author = mongoose.model('Author', authorSchema);

module.exports = Author