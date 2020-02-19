/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.
*/

// Chiedere nome, cognome, km e eta'
// Prezzo biglietto * km
// Prezzo scontato

var tariffa = 0.21;
var scontoUnder = 20;
var scontoOver = 40;
var nomeCognome = prompt('Per favore inserisci nome e cognome separati da uno spazio');
var etaAnagrafica = prompt('Quanti anni hai?');
var kmTragitto = prompt('Quanti km vuoi percorrere?')
var prezzoBiglietto = tariffa * kmTragitto;
var prezzoScontato;

if (etaAnagrafica <= 17) {
    prezzoScontato = prezzoBiglietto - (prezzoBiglietto * scontoUnder) / 100;
    document.getElementById('prezzo-scontato').innerHTML = ' ' + prezzoScontato;
} else if (etaAnagrafica >= 66) {
    prezzoScontato = prezzoBiglietto - (prezzoBiglietto * scontoOver) / 100;
    document.getElementById('prezzo-scontato').innerHTML = ' ' + prezzoScontato;
} else {
    prezzoScontato = prezzoBiglietto;
    document.getElementById('prezzo-scontato').innerHTML = ' ' + "Non hai diritto a nessuno sconto" + prezzoScontato;
}

var oraAttuale = new Date();
document.getElementById('ora-attuale').innerHTML = oraAttuale.getHours() + '.' + oraAttuale.getMinutes();

document.getElementById('nome-cognome').innerHTML = ' ' + nomeCognome;
document.getElementById('eta-anagrafica').innerHTML = ' ' + etaAnagrafica;
document.getElementById('km-tragitto').innerHTML = ' ' + kmTragitto;
document.getElementById('prezzo-biglietto').innerHTML = ' ' + prezzoBiglietto;
document.getElementById('prezzo-scontato').innerHTML = ' ' + prezzoScontato;
