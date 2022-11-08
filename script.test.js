"use strict";
/* global describe */
/* global it */
/* global assert */
/* global pow */

describe("Mocha & Chai Test for Lab6", function () {
  describe("Sum of the array", function () {
    let arr = [1, 2, 3, 4];
    let expected = 10;
    it(` sum of arry[1,2,3,4] is ${expected}`, function () {
      assert.equal(sum(arr), expected);
    });
  });

  describe("Multiply of the array", function () {
    let arr = [1, 2, 3, 4];
    let expected = 24;
    it(`Multiply of arry[1,2,3,4] is ${expected}`, function () {
      assert.equal(mul(arr), expected);
    });
  });

  describe("String reverse", function () {
    let str = "i am reverse";
    let expected = "esrever ma i";
    it(`Reverse string [${str}] is [${expected}]`, function () {
      assert.equal(reverWord(str), expected);
    });
  });

  describe("Allow Strings greater than given length", function () {
    const words = [
      "Hello",
      "iamhello",
      "iamlongestWord",
      "shortestword",
      "shor",
    ];
    const index = 9;
    let expected = ["iamlongestWord", "shortestword"];
    it(`Array of String greater than giver length`, function () {
      assert.deepEqual(longestWord(words, index), expected);
    });
  });
});
