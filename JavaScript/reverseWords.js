// 1. Take a sentence as an input and reverse every word in that sentence.
// Example - This is a sunny day > shiT si a ynnus yad.

function reverseWords(sentence) {
    const words = sentence.split(' ');

    const reversedWords = words.map(word => reverseWord(word));
    const reversed = reversedWords.join(' ');

    return reversed;
}

function reverseWord(word) {
    return word.split('').reverse().join('');
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);

console.log(reversedSentence); // Output: "sihT si a ynnus yad"



