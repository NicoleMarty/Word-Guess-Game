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


}