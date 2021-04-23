var wordArray = [];
function checkWord() {
  word = document.getElementById('wordToCheck').value;
  if (word) {
    if (wordArray.indexOf(word) == -1) {
      document.getElementById('wordStatus').innerHTML = 'Word not found';
    } else {
      document.getElementById('wordStatus').innerHTML = 'The word is on the list';
    }
  }
}

function addWord() {
  word = document.getElementById('wordToAdd').value;
  wordArray.push(word);
}

function showWords() {
  console.log(wordArray);
}

function clearList() {
  wordArray = [];
}
