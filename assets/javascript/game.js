console.log("page loaded");

// Variables
var currentChoice; // "current name" selected by computer
var nameBuild = []; // number of letters in "current name"
var numGuesses = 0; // number of letters guessed
var lettersGuessed = []; // Store the guessed letters;
var nameObject = {
    cleopatra: "_ _ _ _ _ _ _ _ _",
    malala: "_ _ _ _ _ _",
    marieantoinette: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _",
    harriettubman: "_ _ _ _ _ _ _ _ _ _ _ _ _"
};
var nameIndex = 0;
var userGuess;

var wins = 0;
var losses = 0;
var gameEnd = false;
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];


var currentNameElement = document.getElementById("current-choice")
var userGuessElement = document.getElementById("user-guess")
var winsElement = document.getElementById("wins-count")
var allowedGuessesElement = document.getElementById("letters-guessed")
var letterCountElement = document.getElementById("letter-num")



var nameArray = ["cleopatra", "malala", "marie antoinette", "harriet tubman"];
var name = Math.floor(Math.random() * nameArray.length);
var currentChoice = nameArray[name];
console.log(currentChoice);
if (currentChoice === "cleopatra") {
    currentNameElement.innerHTML = ["_ _ _ _ _ _ _ _ _"];
    console.log(nameObject.cleopatra)
    nameBuild = ["c", "l", "e", "o", "p", "a", "t", "r", "a"];
    console.log(nameBuild[0])

} else if (currentChoice === "malala") {
    currentNameElement.innerHTML = ["_ _ _ _ _ _"];
    console.log(nameObject.malala)
} else if (currentChoice === "marie antoinette") {
    currentNameElement.innerHTML = ["_ _ _ _ _ _ _ _ _ _ _ _ _ _ _"];
    console.log(nameObject.marieantoinette)
} else if (currentChoice === "harriet tubman") {
    currentNameElement.innerHTML = ["_ _ _ _ _ _ _ _ _ _ _ _ _"];
    console.log(nameObject.harriettubman)
}