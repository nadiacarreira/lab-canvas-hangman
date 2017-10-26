var hangman;

function Hangman() {
  this.words = [""];
  this.secretWord = "secretWord";
  this.letters= [""];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype._getWord = function () {
    return "";

};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if(keyCode >= 65 && keyCode <= 90){
    return true;
  }else{
    return false;
  }
};

Hangman.prototype._checkClickedLetters = function(key) {
  if(this.letters.indexOf(key) === -1){
    return true;
  }else{
    return false;
  }
};

Hangman.prototype._addCorrectLetter = function(i){
  this.guessedLetter = this.secretWord[i].toUpperCase();
  // _checkWinner();
};


Hangman.prototype._addWrongLetter = function (letter){
  this.errorsLeft--;
  // _checkGameOver();
};

Hangman.prototype._checkGameOver = function() {
  if(this.errorsLeft === 0){
    return true;
  }else{
    return false;
  }
};

Hangman.prototype._checkWinner = function() {
  if(this.guessedLetter.length === this.secretWord.length){
    return true;
  }else{
    return false;
  }
};
