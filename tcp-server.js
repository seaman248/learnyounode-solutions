var net = require('net');

var tcpserver = net.createServer(function (socket) {
	date = new Date();
	month = +(date.getMonth())+1
	fdate = date.getFullYear()+'-'+month+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+'\n';
	//console.log(fdate);
	socket.end(fdate);
}).listen(process.argv[2]);