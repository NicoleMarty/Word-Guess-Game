// Variables
var userGuess;
var remainingLetters;

//Each element of the array is marked by an index. Indexes always start with 0.
//Can be made up of other arrays and objects.
var nameArray = ["cleopatra", "malala", "marie antoinette", "harriet tubman"];
// ex: cleopatra=index[0]
var nameArrayValues = ["_"]

var allowedGuesses = 12;
var wins = 1;

var currentNameElement = document.getElementById("current-name");
var userGuessElement = document.getElementById("letters-guessed");
var winsElement = document.getElementById("wins-count");
var allowedGuessesElement = document.getElementById("remaining-guesses");

// used to tell when user wins
var letterCountElement = document.getElementById("remaining-letters");

// for loop 
// variable declaration or counter (iterator)
//loop condition
//iteration (addition)
document.onkeyup = function(event) {
    var userGuess = event.key;
    userGuessElement.innerHTML = userGuess;
}
var nameArray = ["cleopatra", "malala", "marie antoinette", "harriet tubman"];
document.onkeyup = function(event) {
    var userGuess = event.key;
    var currentName = nameArray[Math.floor(Math.random() * nameArray.length)];
    for (var i = 1; i < currentName.length; i++) {
        console.log(currentName[i]);
        if (currentName[i] === "cleopatra"); {
            currentNameElement.innerHTML = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
        }
        if (currentName[i] === "malala"); {
            currentNameElement.innerHTML = ["_", "_", "_", "_", "_", "_"];

        }
        if (currentName[i] === "marie antoinette"); {
            currentNameElement.innerHTML = ["marie" + "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];
        }
    }

}