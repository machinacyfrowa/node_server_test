//stwórz zmienną http i zapisz do niej instancję serwera http
let http = require('http');

//powstaje serwer www, któremu musimy podać funkcję która obsłuży żądanie
http.createServer(
    //deklarujemy obsługę żądnia jako nową funkcję anonimową
    function (request, response) {
        //wyślj do przeglądarki kod HTTP i rodzaj treści która nastąpi
        response.writeHead(200, {'Content-Type': 'text/plain'});
        //wyślij napis i oznaczenie końca treści
        response.end('Hello world!');
    }
).listen(8000); //łańcuchowo uruchamiamy metodę listen
