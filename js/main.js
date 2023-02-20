// README
// Creo la variabile firstName e, tramite un prompt, chiedo all'utente di fornirmi il suo nome;
// Allo stesso modo, creo anche le variabili lastName e favColor, per chiedergli quali siano il suo cognome e il suo colore preferito;
// Creo una quarta variabile, psw, per concatenare i precedenti valori in un'unica password;
// Stampo il risultato in console per verificare di aver svolto il lavoro nel modo corretto;
// Seleziono i tag html di mio interesse e vado a modificarli inserendo i dati ricevuti dall'utente.

'use strict';

const firstName = prompt('Inserisci il tuo nome');
const lastName = prompt('Inserisci il tuo cognome');
const favColor = prompt('Inserisci il tuo colore preferito');

const psw = `${firstName}${lastName}${favColor}89`;

console.log(psw);

document.querySelector('h1').innerHTML = `Ciao, ${firstName} ${lastName}!`;
document.querySelector('h3').innerHTML = psw;