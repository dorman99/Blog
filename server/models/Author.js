var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var authorSchema = new Schema({
  name    : String,
  username: { type: String, required: true, unique: true },
  password: {type:String,required:true},
  role    : {type:String,default:'author'},
  img: { type: String, default: 'https://png.icons8.com/android/1600/user.png'}
  },{timestamps:{createdAt:'created_At'}});


  authorSchema.plugin(uniqueValidator);
var Author = mongoose.model('Author', authorSchema);

module.exports = Author