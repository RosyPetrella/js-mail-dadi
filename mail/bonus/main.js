// Mail
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio) .
// Bonus:
// Dopo aver svolto l'esercizio con il for  fai una cartella bonus e svolgilo anche anche usando un metodo delle array tipo includes
// Nota: Non è necessario provvedere alla validazione delle email

const emailList = [
  "marco@gmail.com",
  "luca@gmail.com",
  "giovanna@gmail.com",
  "francesca@gmail.com",
];

let userEmail = prompt("Type your email");

if (emailList.includes(userEmail)) {
  console.log("You can go to the party");
} else {
  console.log("Maybe next time");
}
