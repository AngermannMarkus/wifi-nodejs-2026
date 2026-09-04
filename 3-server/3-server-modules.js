const http = require('http');
const url = require('url');
const fs = require('fs');
const owndate = require('./ownmoduledate.js');

http.createServer(function (request, response) {
    fs.readFile('frontend.html', function(error, data) {

        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.write(data);

        //Daten Verarbeitung...
        response.write('Hallo, Datum: ' + owndate.ownDate());
        response.write('Pfad: ' + request.url);

        let query = url.parse(request.url, true).query;
        console.log(query);
        console.log(query.plz);

        let result = '';
        response.end(result);
    });
}).listen(8080);
