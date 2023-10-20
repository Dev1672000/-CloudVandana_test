// 1. Take a sentence as an input and reverse every word in that sentence.
// Example - This is a sunny day > shiT si a ynnus yad.

function reverseWords(sentence) {
  let start = 0;
  let end = 0;
  const reversedWords = [];

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      reversedWords.push(reverseWord(sentence, start, end));
      start = i + 1;
    }
    end = i;
  }

  reversedWords.push(reverseWord(sentence, start, end));

  return reversedWords.join(' ');
}

function reverseWord(sentence, start, end) {
  let reversedWord = '';
  for (let i = end; i >= start; i--) {
    reversedWord += sentence[i];
  }
  return reversedWord;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence); 
