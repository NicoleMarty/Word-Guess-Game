// Variables
var userGuess;
var allowedGuesses;
var computerChoice;
var computerArray;
var remainingLetters;

var computerOptions = ["cleopatra", "malala", "marie antoinette", "harriet tubman"];
var wordChoiceElement = document.getElementById('wordChoice');
var letterCountElement = document.getElementById("letterCount");
var userGuessElement = document.getElementById("userGuess");

// Creates an array that lists out all of the options for computer generated words.
var computerOptions = ["cleopatra", "malala", "marie antoinette", "harriet tubman"];
// When user presses key...
document.onkeyup = function(event) {
        // Tell computer to choose a random word from var words
        var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
        var userGuess = event.key;
    }
    // Create array to be filled by random word on a loop
var computerArray = [];
for (var i = 0; i < computerOptions.length; i++) {
    computerArray[i] = "_";
}
var remainingLetters = computerOptions.length;

// While loop to make sure keeps looping as long as long as there are more letters to guess and remaining guesses !== 0
while (remainingLetters > 0) {
    // Show progress on word throughout the time user making guesses
    document.getElementById("answer-array").innerHTML(answerArray.join(" "));

    // Create another loop to run each time the user guesses a letter to check if the choice matches any of the _ in word
    for (var k = 0; k < word.length; k++) {
        if (word[k] === choice) {
            answerArray[k] = choice;
            remainingLetters--;

            // decrease remainingGuesses
            // add choice to letterGuessesd
        }
    }
}



// if remaining letters === 0


// if remaining guesses === 0