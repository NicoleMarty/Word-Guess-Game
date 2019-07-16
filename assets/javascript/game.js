// Creates an array that lists out all of the options for computer generated words.
var words = ["cleopatra", "malala", "marie antoinette", "harriet tubman"];

// Tell computer to choose a random word from var words
var word = words[Math.floor(Math.random() * words.length)];

// Create array for randomly chosen word
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;