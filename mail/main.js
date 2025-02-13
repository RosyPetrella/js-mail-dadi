// Mail
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio) .

const emailList = [
  "marco@gmail.com",
  "luca@gmail.com",
  "giovanna@gmail.com",
  "francesca@gmail.com",
];

let userEmail = prompt("Type your email");

let isIn = false;

for (let i = 0; i < emailList.length; i++) {
  if (emailList[i] == userEmail) {
    isIn = true;
  }
}

if (isIn) {
  console.log("You can go to the party");
} else {
  console.log("Maybe next time");
}
