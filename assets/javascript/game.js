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
var livesLeft = document.getElementById("lives");
var guessLeft = document.getElementById("letters-guessed");

//-select one randomly(random word generator)
var wordGenerator = function() {
    var wordIndex = Math.floor(Math.random() * wordArray.length);
    return wordArray[wordIndex].split('');
}



var randomWord = wordGenerator();
    console.log("random : " + randomWord);

var blanksArray = [];

winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses " + losses;
livesLeft.textContent = "Guesses Left: " + guessesLeft;
guessLeft.textContent = "Letters Guessed: ";

//picks random word and displays blanks
for (var i = 0; i < randomWord.length; i++) {
    if(randomWord[i] === ' ') {
        blanksArray.push('    ');
    }
    else{
        blanksArray.push('_');
    }
};
displayWord(blanksArray);

function displayWord(array) {
    console.log(array);
    var displayWords = document.getElementById("display-words");
    displayWords.innerHTML = `<span>${array.join(' ')}</span>`;  
}

console.error(blanksArray.join(' '));
//press any key to get started a.k.a. starts the game
document.onkeyup = function(event) {
    //makes it lowercase
    
    userGuess(event.key.toLowerCase());
    //display
   
    
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
    for(var i=0; i < randomWord.length; i++) {
        if(randomWord[i] === letter) {
            console.log('hit if', letter, randomWord, blanksArray)
        ;
            blanksArray.splice(i, 1, letter);
            displayWord(blanksArray);
            return;
        }
    
    }
    lettersGuessed.push(event.key.toLowerCase());
            guessesLeft--;
            livesLeft.textContent = "Guesses Left: " + guessesLeft;
            guessLeft.textContent = "Letters Guessed: " + lettersGuessed.join(', ');
//should replace _ with letter but doesnt
// for (var i = 0; i<result.length; i++) {
//     wordArray[result[i]] = letter;
// }
 }

var resetGame = function() {
    guessesLeft = 10;
}

//cant get letters to show up on screen, dont understand JS nor how to complete assignment.