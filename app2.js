const fs = require('fs');

//funkcja strzałkowa - krótszy zapis funkji anonimowej
//tożsame z użyciem function(error, data) {}
fs.readFile('test.txt', 'utf8', (error, data) => {
    if(error) {//jeżeli nastąpił jakiś błąd podczas czytania pliku
        console.error("Błąd podczas odczytu pliku: " + error);
        return;
    }
    console.log("Zawartośc pliku: \n" + data);
});

console.log("Czytam plik...\n");