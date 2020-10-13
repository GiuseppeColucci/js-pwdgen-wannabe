var nome = prompt('Come ti chiami');

var cognome = prompt('il tuo cognome');


var colore= prompt('quale è il tuo colore preferito');
/*
parte dove prendiamoi dati dall'utente..
----------------------------------------------
parte di collegamento dei dati con gli elementi del HTML
*/ 


document.getElementById('benvenuto').innerHTML= 'Benvenuto '+ nome + cognome + colore + 19;
/*
piccoli calcoli per provare... con gli apici i valori diventano stringhe.. senza sono numeri che si possono sommare ecc..

*/ 
var numero= 12;
var numeroDue=30;
console.log(numero + numeroDue);
/*
calcoli matematici
*/ 
var somma=4+4;
var sott=somma -4;
var divisione= somma / 2;
var molt=sott*2;
console.log(somma);
console.log(sott);
console.log(divisione);
console.log(molt);

alert ('risultato somma' + somma +sott+ divisione +molt)