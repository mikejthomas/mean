var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost:27017/time-waste');

app.use('/app', express.static(__dirname + "/app" ));
app.use('/node_modules', express.static(__dirname + "/node_modules"));


app.get('/', function(req,res){
    res.sendfile('index.html');
});

app.listen('8081', function () {
    console.log("Listening for Local Host 8081");
});
