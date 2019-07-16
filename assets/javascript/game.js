// Creates an array that lists out all of the options for computer generated words.
var words = ["cleopatra", "malala", "marie antoinette", "harriet tubman"];

// Tell computer to choose a random word from var words
var word = words[Math.floor(Math.random() * words.length)];

// Create array for randomly chosen word to loop
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;

// While loop to make sure keeps looping as long as long as there are more letters to guess and remaining guesses !== 0
while ((remainingLetters > 0) && (remainingGuesses !== 0)) {
    // Show progress on word throughout the time user making guesses
    document.getElementById("answer-array") = innerHTML(answerArray.join(" "));

    // When user presses key...
    //create another loop to run each time the user guesses a letter to check if the choice matches any of the _ in word
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



}