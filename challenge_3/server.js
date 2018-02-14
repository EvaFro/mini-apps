
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// parse data
app.use(bodyParser.json());
// load any static page from the client folder
app.use(express.static(__dirname + '/client'));

// serve up the index.html page
app.get('/',(req, res)=>{
	res.sendFile('/client/index.html');
});

// creat a listen even for a specific port
app.listen(3000);
