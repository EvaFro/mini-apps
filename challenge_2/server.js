var http = require("http");
var convertData = require("convertData.js");
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

// middle where that serves up any static files
app.use(express.static('/client'))

// if the get request is "/" serve up html page
app.get('/', (req, res)=>{
	res.sendFile('/client/index.html')
})

http.createServer(app).listen(3000);