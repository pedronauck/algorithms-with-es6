# Algorithms with ES6

This is just a lab to test how classic algorithms written in Ecmascript 6  would look like. The code result is incredible, because it resolves a lot of problems that we used to have while writting Javascript.

The list of Algorithms so far:

## Math Expressions

Algorithm | Description
--------- | -----------
[factorial](/src/math/factorial.js) | Factorial algorithm
[fibonacci](/src/math/fibonacci.js) | Fibonacci algorithm
[greatestCommonDivisor](/src/math/greatest-common-divisor.js) | Get the greatest common divisor of two numbers
[isPrime](/src/math/is-prime.js) | Verify if is a prime number
[permutation](/src/math/permutation.js) | Permutation algorithm
[simpleCombination](/src/math/simple-combination.js) | Simple combination algorithm

## Array functions

Algorithm | Description
--------- | -----------
[flatten](/src/array/flatten.js) | Flatten an array
[removeFromArr](/src/array/remove-from-array.js) | Remove an item from an array
[reverse](/src/array/reverse.js) | Reverse an array
[removeDuplicates](/src/array/remove-duplicates.js) | Remove duplicates item in array
[concat](/src/array/concat.js) | Concatenate arrays
[intersection](/src/array/intersection.js) | Intersection between arrays
[union](/src/array/union.js) | Union between arrays

## Interview Questions

Algorithm | Description
--------- | -----------
[givenSum](/src/interview-questions/given-sum.js) | Get two numbers in an array that the sum is equal a other number that is passed as second parameter
[isPalindrome](/src/interview-questions/is-palindrome.js) | Return if word is a [palindrome](http://en.wikipedia.org/wiki/Palindrome)
[reorderByIndexes](/src/interview-questions/reorder-by-indexes.js) | Reorder an array based on other array with indexes
[reverseStr](/src/interview-questions/reverse-string.js) | Reverses a given string 

You can see the compiled codes [at here](/compiled).

## How to run

1. Make sure to install all modules
```bash
$ npm install
```
1. After making any changes, add your tests to `__tests__` folder and run the test command
```bash
$ npm test
```
1. To build from ES6 to ES5:
```bash
$ gulp build
```

Enjoy! :ghost:
