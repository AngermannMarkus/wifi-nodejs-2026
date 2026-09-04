const http = require('http');

http.createServer((require, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World !!!');
}).listen(8080);