var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//list of words
var wordArray = ['old fashioned', 'margarita', 'moscow mule', 'whiskey sour', 'manhattan', 'mimosa', 'martini', 'daiquiri']
var lettersGuessed = []
var wins = 0
var losses = 0
var guessesLeft = 10

//connects to ID in HTML
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessedLeftText = document.getElementById("lives");

//-select one randomly(random word generator)
var wordGenerator = function() {
    var wordIndex = Math.floor(Math.random() * wordArray.length);
    return wordArray[wordIndex];
}

var randomWord = wordGenerator();
    console.log("random : " + randomWord);

var tempString = "";

winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses " + losses;
guessedLeftText.textContent = "Guesses Left: " + guessesLeft;
lettersGuessed.textContent = "Letters Guessed: ";

//picks random word and displays blanks
for (var i = 0; i < randomWord.length; i++) {
   if (lettersGuessed.includes(randomWord[i])) {
        tempString += randomWord[i] + " ";
    } 
    else {
    tempString += "_ ";
    }

//press any key to get started a.k.a. starts the game
document.onkeyup = function(event) {
    var displayWords = document.getElementById("display-words");
    //makes it lowercase
    lettersGuessed.push(event.key.toLowerCase);

    //display
    console.log(tempString);
    displayWords.innerHTML = tempString;
    
    resultIndex = wordArray[Math.floor(Math.random() * wordArray.length)]; 

    var result = [];

    for (var i=0; i<result.length; i++) {
        if (event.key === result[i]) {
            lettersGuessed[i] = event.key;
        }
    }
}

function userGuess(letter) {
    for(var i=0; i < wordArray[resultIndex].length; i++) {
        if(wordArray[resultIndex][i] === letter) {
            tempString.push(i);
        }
    }

//should replace _ with letter but doesnt
for (var i = 0; i<result.length; i++) {
    wordArray[result[i]] = letter;
}
}

var resetGame = function() {
    guessesLeft = 10;
}
}
//cant get letters to show up on screen, dont understand JS nor how to complete assignment.