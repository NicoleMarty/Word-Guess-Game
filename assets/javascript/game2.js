// Set variables
var directionsText = document.getElementById("directions-text");

var names = ["cleopatra", "malala", "marie antoinette", "harriet tubman"];
console.log("First statement");
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

names[0] = ["_", "_", "_", "_", "_", "_", "_", "_"];
names[1] = ["_", "_", "_", "_", "_", "_"];
names[2] = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];
names[3] = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];

console.log("Second statement");
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);


var userGuess;
var userGuessElement = document.getElementById("user-guess");

var guessesAllowed = document.getElementById("guesses-allowed");
var guessesCorrect;
var guessesWrong;

var remainingLetters;
var letterCountElement = document.getElementById("letter-count");

var wins = 0;
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

var userGuessElement = document.getElementById("user-guess");
document.onkeyup = function(event) {
    userGuessElement.textContent = event.key;
};