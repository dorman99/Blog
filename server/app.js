var express = require('express');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var signup = require('./routes/signup')
var authors = require('./routes/authors');
var login = require('./routes/login')
var blogs = require('./routes/blogs');
var upload =  require('./routes/imageupload')
var app = express();
var mongoose = require("mongoose");
var cors = require('cors')
var morgan = require('morgan')
mongoose.connect('mongodb://dorman99:tdd1@ds247698.mlab.com:47698/tdd')
// mongoose.connect('mongodb://localhost/tdd')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
morgan('tiny')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use('/', index);
app.use('/login',login)
app.use('/signup',signup)
app.use('/authors', authors);
app.use('/blogs',blogs)
app.use('/upload',upload)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
