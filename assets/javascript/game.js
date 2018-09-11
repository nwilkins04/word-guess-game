var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//list of words
var wordArray = ['old fashioned', 'margarita', 'moscow mule', 'whiskey sour', 'manhattan', 'mimosa', 'martini', 'daiquiri']
//letters guessed
var lettersGuessed = []
var wins = 0
var losses = 0
var guessesLeft = 0

//-select one randomly(random word generator)
var wordGenerator = function() {
    var wordIndex = Math.floor(Math.random() * wordArray.length);
    return wordArray[wordIndex];
}

//connects to ID in HTML
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessedLeftText = document.getElementById("lives");

winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses " + losses;
guessedLeftText.textContent = "Guesses Left: " + guessesLeft;
lettersGuessed.textContent = "Letters Guessed: ";

var randomWord = wordGenerator();
    console.log("random : " + randomWord);

var tempString = "";

//press any key to get started a.k.a. starts the game
document.onkeyup = function(event) {
    var displayWords = document.getElementById("display-words");
    //makes it lowercase
    lettersGuessed.push(event.key.toLowerCase);

    //display
    console.log(tempString);
    displayWords.innerHTML = tempString;
    
}

var resetGame = function() {
    guessesLeft = 10;
    result = wordArray[Math.floor(Math.random() * wordArray.length)];  
}
for (var i = 0; i < randomWord.length; i++) {
    if (lettersGuessed.includes(randomWord[i])) {
        tempString += randomWord[i] + " ";
    } else {
    tempString += "_ ";
    }


}
