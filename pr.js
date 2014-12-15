var rdir = require('./rdir.js');

var strIn = process.argv[2];
var ext = process.argv[3];

rdir(strIn, ext, function(err, files) {
	
	for (var i = files.length - 1; i >= 0; i--) {
		console.log(files[i]);
	};
	
});