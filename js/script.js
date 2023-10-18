const inputs = document.querySelector(".inputs"),
hintTag = document.querySelector(".hint span"),
guessLeft = document.querySelector(".guess-left span"),
wrongLetter = document.querySelector(".wrong-letter span");


let word, maxGuesses, incorrectLetters = [], correctLetters = [];

function randomWord() {
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word;
    maxGuesses = word.length >= 5 ? 8 : 6;
    correctLetters = []; incorrectLetters = [];
    hintTag.innerText = ranItem.hint;
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;

  
}
randomWord();