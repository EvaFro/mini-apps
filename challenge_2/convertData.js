var csvFun = require(convertCSV);
var convertData = function(request, response, next){
	var flatData = csvFun.flatten(request.data);
	var csvData = csvFun.makeCSV(flatData);
	next();
}

exports.convertData = convertData;