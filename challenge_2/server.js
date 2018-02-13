var http = require("http");
var convertCSV = require("convertCSV.js");


http.createServer((request, responce)=>{

	if(request.type === "GET"){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		console.log("Get", request.data)
	}

	if(request.type === "POST"){
		response.writeHead(201, {'Content-Type': 'text/plain'});
		console.log("Post", request.data)
	}

}).listen(3000,'127.0.0.1');