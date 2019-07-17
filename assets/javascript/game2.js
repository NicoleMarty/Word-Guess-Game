// Set variables
var directionsText = document.getElementById("directions-text");

var computerOptions = ["cleopatra", "malala", "marie antoinette", "harriet tubman"];
var wordChoiceElement = document.getElementById("word-choice");
var computerArray;
var optionIndex = 0;

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
// Function is run whenever user presses a key
document.onkeyup = function(event) {
    // Computer chooses an option from computerOptions
    function startGame()
    var computerArray = [];
    for (var i = 0; i < computerOptions.length; i++) {
        computerArray[i] = "_";
    }
    var remainingLetters = computerOptions.length;
}