//biblioteka do obsługi plików
const fs = require('fs');
//biblioteka serwera http
let http = require('http');

//tworzymy serwer ww odpowiadający na zapytania z przeglądarki
http.createServer(
    //deklarujemy funkcje która definiuje zachowanie serwera
    //po otrzymaniu żądania (request) i co odeśle (response)
    function (request, response) {
        //odczytujemy plik (asynchronicznie)
        fs.readFile('index.html', 'utf-8', (error, data) => {
        if(error) {//jeżeli nastąpił jakiś błąd podczas czytania pliku
            console.error("Błąd podczas odczytu pliku: " + error);
            return;
        }
        //wysyłamy nagłówek do przeglądarki
        response.writeHead(200, {'Content-Type': 'text/html'});
        //wysyłamy zawartośc pliku
        response.write(data);
        //zamykamy odpowiedz
        response.end();
        })
    }
).listen(8000); //nasłuchuj na porcie 8000