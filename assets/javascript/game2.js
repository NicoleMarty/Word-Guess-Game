// Set variables
var directionsText = document.getElementById("directions-text");

var computerOptions = ["cleopatra", "malala", "marie antoinette", "harriet tubman"];
var computerChoice;
var wordChoiceElement = document.getElementById("word-choice");
var computerArray;

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

// Start the game