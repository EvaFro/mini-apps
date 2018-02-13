



// // Create a flatten function
// // Goal: takes children and maps them into an array 
// // I: Object 
// // O: flattendArray
// var flatten = function flatten(obj){
// 	// create a mappedArr 
// 	var mappedArr = [];
// 	// create a recursive function
// 	var recursive = function recursive(recursedObj){
// 		//I: object
// 		//O: push childrent into mappedArr
// 		// Code:
// 		// create a tempObj
// 			// copy of Obj
// 		var tempObj = Object.assign({},recursedObj);
// 		// remove children
// 		delete(tempObj.children);
// 		// tempObj into mappedArr
// 		mappedArr.push(tempObj);

// 		// if obj.children === []
// 		if(recursedObj.children.length < 1){
// 			// return
// 			return;
// 		} else {
// 			// else 
// 			// iderate over obj.children
// 			recursedObj.children.forEach((child)=>{
// 				// recersive(obj.children[i])
// 				recursive(child);
// 			});
// 		}
// 	}
// 	recursive(obj);
// 	// return mappedArr
// 	return mappedArr;
// }


// // Create a makeCSV function
// 	// takes the flattenArray
// 		// converts to a csv file 
// 			// all colmn data except children
// 			// all data in same order as original obj
// 			// all comma dilimiated
// var makeCSV = function makeCSV(flatArr){
// 	var colmnNames = Object.getOwnPropertyNames(flatArr[0]);
// 	var csv = [colmnNames];
// 	flatArr.forEach((row)=>{
// 	    var tempRow = [];
// 	    colmnNames.forEach((colmn)=>{
// 	        tempRow.push(row[colmn]);
// 	    })
// 	    csv.push(tempRow);
// 	})

// 	return csv.join('\n');
// }

// // Call both functions
// var flatArray = flatten(jsonObj);
// var csvSend = makeCSV(flatArray);


