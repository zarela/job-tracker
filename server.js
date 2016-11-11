//MODULES
//=========================================
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var logger = require ('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var port = process.env.PORT || 3000;
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/jobs', require('./controller/jobs.js')); //********

//DATABASE CONNECTION
//====================================
var db = mongoose.connection;
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/jobs';
mongoose.connect(mongoURI);

//CHECKING CONNECTION
//===================================
app.get('/', function(req, res){
    res.send('index');
});

//PORT LISTENER
//=======================================
app.listen(3000, function(){
  console.log("========================");
  console.log('RUNNING on PORT ' + port);
  console.log("=======================");
});
