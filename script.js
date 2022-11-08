"use strict";

const sum = function (arr) {
  return arr.reduce((acc, incr) => acc + incr, 0);
};

console.log("sum of array [1,2,3,4] is: ", sum([1, 2, 3, 4])); // 10

const mul = function (mArr) {
  return mArr.reduce((acc, incr) => acc * incr, 1);
};
console.log("Multiply of array [1,2,3,4] is: ", mul([1, 2, 3, 4])); // 24

const reverWord = function (word) {
  return word.split("").reverse().join("");
};

console.log(`Rever of String 'jag testar' is: `, reverWord("jag testar"));

const longestWord = (words, i) => words.filter((word) => word.length > i);
const words = ["Hello", "iamhello", "iamlongestWord", "shortestword", "shor"];
const index = 9;
console.log(
  `length of the Words that is greater than length ${index} : `,
  longestWord(words, index)
);
