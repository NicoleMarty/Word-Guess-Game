var userGuess;
var remainingLetters;

var nameArray = ["cleopatra", "malala", "marie antoinette", "harriet tubman"];
var allowedGuesses = 12;
var lettersGuessed = [];
var indexOfCurrentName;
var wins = 0;
var losses = 0;
var currentName = [];
var gameEnd = false;
var nameBuild = [];

var currentNameElement = document.getElementById("current-name");
var userGuessElement = document.getElementById("letters-guessed");
var winsElement = document.getElementById("wins-count");
var allowedGuessesElement = document.getElementById("remaining-guesses");
var letterCountElement = document.getElementById("remaining-letters");

var nameArray = ["cleopatra", "malala", "marie antoinette", "harriet tubman"];
var name = Math.floor(Math.random() * nameArray.length);
var nameChoice = nameArray[name];
for (var i = 0; i < nameChoice.length; i++) {

    if (nameChoice === "cleopatra"); {
        currentNameElement.innerhtml = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];
    }

    if (nameChoice === "malala"); {
        currentNameElement.innerHTML = ["_", "_", "_", "_", "_", "_"];
    }

    if (nameChoice === "marie antoinette"); {
        currentNameElement.innerHTML = ["marie" + "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];
    }
}