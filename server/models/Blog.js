var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');



var blogSchema = new Schema({
  title:  String,
  author: { type: Schema.Types.ObjectId, ref: 'Author' },
  img: {type: String},
  content: {type: String, required:true},
  likes:[{ author: String,date: {type:String , default:moment().format("MMM Do YY")} }],
  comments: [{ author: String, body:String,date: {type:String , default:moment().format("MMM Do YY")} }],
  date: {type:String , default:moment().format("MMM Do YY")}
});

var Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog