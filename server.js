var http = require('http')
  , Hello = require('./hello.js');

var hello = new Hello();

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end(hello.ninja());
}).listen(8080);