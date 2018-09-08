//number of wins

//letters guessed
var lettersGuessed = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//list of words
var wordArray = ['old fashioned', 'margarita', 'moscow mule', 'whiskey sour', 'manhattan', 'mimosa', 'martini', 'daiquiri']

//press any key to get started
document.onkeyup = function(event) {
    var displayWords = document.getElementById("display-words");
    lettersGuessed.push(event.key.toLowerCase);

    //userText.textcontent = event.key;
    console.log("Number of words: " + wordArray.length)
    var randomWord = wordGenerator();
    console.log("random person: " + randomWord);

    var tempString = "<p>";
    var wins = 0
    var loses = 0

    for (var i = 0; i < randomWord.length; i++) {
        if (lettersGuessed.includes(randomWord[i])) {
            tempString += randomWord[i] + " ";
        } else {
        tempString += "_ _ ";
        }
    }
    //end paragraph
    tempString += "<p>";
        console.log(tempString);
        displayWords.innerHTML = tempString;

}
//-select one randomly(random word generator)
var wordGenerator = function() {
    var wordIndex = Math.floor(Math.random() * wordArray.length);
    return wordArray[wordIndex];
}


//press a key to begin again