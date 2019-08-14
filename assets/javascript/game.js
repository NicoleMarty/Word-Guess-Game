console.log("page loaded");

// Variables
var currentChoice; // "current name" selected by computer
var nameBuild = []; // number of letters in "current name"
var numGuesses = 0; // number of letters guessed
var lettersGuessed = []; // Store the guessed letters;
var indexOfCurrentName = ["_ _ _ _ _ _ _ _ _", "_ _ _ _ _ _", "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _", "_ _ _ _ _ _ _ _ _ _ _ _ _"];
var wins = 0;
var losses = 0;
var gameEnd = false;
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];


var currentNameElement = document.getElementById("current-choice")
var userGuessElement = document.getElementById("user-guess")
var winsElement = document.getElementById("wins-count")
var allowedGuessesElement = document.getElementById("guesses-num")
var letterCountElement = document.getElementById("letter-num")

/*document.getElementById("user-guess").on,("keyup", function();
function startGameFunction() {
    document.getElementById("letters-guessed").textContent
}*/

var nameArray = ["cleopatra", "malala", "marie antoinette", "harriet tubman"];
var name = Math.floor(Math.random() * nameArray.length);
var currentChoice = nameArray[name];
console.log(currentChoice);

// Main Process to choose name
if (currentChoice === "cleopatra") {
    currentNameElement.innerHTML = ["_ _ _ _ _ _ _ _ _"];
} else if (currentChoice === "malala") {
    currentNameElement.innerHTML = ["_ _ _ _ _ _"];
} else if (currentChoice === "marie antoinette") {
    currentNameElement.innerHTML = ["_ _ _ _ _ _ _ _ _ _ _ _ _ _ _"];
} else if (currentChoice === "harriet tubman") {
    currentNameElement.innerHTML = ["_ _ _ _ _ _ _ _ _ _ _ _ _"];
    console.log(letterCountElement)
}

function myFunction() {
    var x = document.getElementById("user-guess").value;
    document.getElementById("letters-guessed").innerHTML = x;
};