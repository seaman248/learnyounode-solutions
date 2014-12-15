var fs = require('fs');
var path = require('path');

// var strIn = process.argv[2];
// var ext = process.argv[3];
// var file = fs.readdir(strIn, function(err, listOfFiles){
// 	if (err){console.log(err);}
// 	else{
// 		for(var i=0; i<=listOfFiles.length; i++){
// 			if(path.extname(listOfFiles[i]) === '.'+ext){
// 				console.log(listOfFiles[i]);
// 			}
// 		}
// 	}
// });

module.exports = function (strIn, ext, callback){
	var files = fs.readdir(strIn, function(err, listOfFiles){
		if(err){return callback(err);}
		else{
			var filesWithExt = [];
			for (var i = listOfFiles.length - 1; i >= 0; i--) {
				if(path.extname(listOfFiles[i]) === '.'+ext){
				filesWithExt.push(listOfFiles[i]);
				}
			};
			
			callback(null, filesWithExt);
		}
	});
}