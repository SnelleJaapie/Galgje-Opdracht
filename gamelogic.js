function displayWordSoFar(word, guesses) {
  const lettersInWordArray = word.split("");

  let output = "";
  for (let index = 0; index < lettersInWordArray.length; index++) {
    const letterInWord = lettersInWordArray[index];
    const isLetterGuessed = guesses.includes(letterInWord);

    if (!isLetterGuessed) {
      output = output + "_ ";
    }

    if (isLetterGuessed) {
      output = output + letterInWord + " ";
    }
  }
  return output;
}




function isGameWon(word, guesses) {
  // WRITE ME
}




function isGameLost(word, guesses) {
  // WRITE ME
}




module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};

