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
    userGuess(event.key);
    //display
    console.log(tempString);
    displayWords.innerHTML = tempString;
    
    //resultIndex = wordArray[Math.floor(Math.random() * wordArray.length)]; 
    //resultIndex = randomWord; 


    // var result = [];

    // for (var i=0; i<result.length; i++) {
    //     if (event.key === result[i]) {
    //         lettersGuessed[i] = event.key;
    //     }
    // }
}
//We need to be able to compare two things exactly alike anbd know their positions are the same
/*
var blanksArray = '_ _ _ ';
var word = 'cat'




*/
function userGuess(letter) {
    for(var i=0; i < randomWord.split('').length; i++) {
        if(randomWord[i] === letter) {
            console.log('hit if', letter, randomWord, tempString
        );
            console.log(tempString.split(' ')[i].splice(i, 1, letter));
        }
        else {
            //this means they failed to choose a letter, we need to add it to the chosen letters and take away a guess
        }
    }

//should replace _ with letter but doesnt
// for (var i = 0; i<result.length; i++) {
//     wordArray[result[i]] = letter;
// }
 }

var resetGame = function() {
    guessesLeft = 10;
}
}
//cant get letters to show up on screen, dont understand JS nor how to complete assignment.