var conCSV = require('./convertCSV.js');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

// use my own middle where 
// // may need to change this to only look for specific requests
// app.use(convertData);
app.use(bodyParser.json());
// app.use(convertData.convertData());

// middle where that serves up any static files
app.use(express.static(__dirname +'/client'));

// if the get request is "/" serve up html page
app.get('/', (req, res)=>{
	console.log("Served up home page!")
	res.sendFile(__dirname +'/client/index.html')
});


app.post("/",(req, res)=>{
	console.log("I got a post request!")
	var flatData = conCSV.flatten(req.body);
	var csv = conCSV.makeCSV(flatData);
	res.send(JSON.stringify(csv));

})


// listen for requests on the server
app.listen(3000);