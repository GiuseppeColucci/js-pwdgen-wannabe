var nome = prompt('Come ti chiami');
console.log('nome');
var cognome = prompt('il tuo cognome');
console.log('cognome');

var colore= prompt('quale è il tuo colore preferito');
console.log('ciao', nome, + cognome);

document.getElementById('benvenuto').innerHTML= 'Benvenuto '+ nome + cognome;

