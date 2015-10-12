var express = require('express');
var path = require('path')
var fs = require('fs')
var app = express();  

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/templates'));
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/controllers'));

app.listen(process.env.PORT || 3000);