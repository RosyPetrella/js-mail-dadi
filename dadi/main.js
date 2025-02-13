// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo.

const userNumber = Math.floor(Math.random() * 6 + 1);
console.log("You rolled: " + userNumber);

const pcNumber = Math.floor(Math.random() * 6 + 1);
console.log("The computer rolled: " + pcNumber);

if (userNumber > pcNumber) {
  console.log("You win with a roll of: " + userNumber);
} else if (userNumber < pcNumber) {
  console.log("The Computer wins with a roll of:  " + pcNumber);
} else {
  console.log("It's a tie! You both rolled: " + userNumber);
}
