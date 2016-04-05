var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.get('/', function(req,res){
    res.sendfile('index.html');
});

app.listen('8081', function () {
    console.log("Listening for Local Host 8081");
});
