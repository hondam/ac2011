var http = require('http');
http.createServer(function(req,res) {
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
  res.end('こんにちはNode Ninja');
}).listen(8080, 'localhost');