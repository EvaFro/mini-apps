var http = require("http");
// var convertData = require("convertData.js");
//var bodyParser = require('body-parser');
var express = require('express');
var app = express();

// use my own middle where 
// // may need to change this to only look for specific requests
// app.use(convertData);

// middle where that serves up any static files
app.use(express.static(__dirname +'/client'));

// if the get request is "/" serve up html page
app.get('/', (req, res)=>{
	res.sendFile(__dirname +'/client/index.html')
});

// app.post((req, res)=>{

// })


// listen for requests on the server
http.createServer(app).listen(3000);