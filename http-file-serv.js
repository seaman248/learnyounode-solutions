var http = require ('http');
var fs = require ('fs');

var port = process.argv[2];
var pathToFile = process.argv[3];

var server = http.createServer(function(req, res){
	fs.createReadStream(pathToFile)
	.pipe(res);
}).listen(port);