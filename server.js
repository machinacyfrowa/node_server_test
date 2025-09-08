const fs = require('fs');
let http = require('http');


http.createServer(
    function (request, response) {
        fs.readFile('index.html', 'utf-8', (error, data) => {
        if(error) {//jeżeli nastąpił jakiś błąd podczas czytania pliku
            console.error("Błąd podczas odczytu pliku: " + error);
            return;
        }
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
        })
    }
).listen(8000);