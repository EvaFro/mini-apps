var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));
app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/client/index.html')
})

app.listen(8080);


