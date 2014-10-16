# Algorithms with ES6

This is a just a lab to test how it would look classic algorithms written with Ecmascript 6. The code result is incredible, because it resolve a lot of problems that we had when writting Javascript.

The list of Algorithms made by now:

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

## Interview Questions

Algorithm | Description
--------- | -----------
[givenSum](/src/interview-questions/given-sum.js) | Get two numbers in an array that the sum is equal a other number that is passed as second parameter
[isPalindrome](/src/interview-questions/is-palindrome.js) | Return if word is a [palindrome](http://en.wikipedia.org/wiki/Palindrome)
[reorderByIndexes](/src/interview-questions/reorder-by-indexes.js) | Reorder an array based on other array with indexes

You can see the compiled codes [at here](/dist).

## How to run

1. Make sure to install all modules
```bash
$ npm install
```
1. After make any changes and add your test to `__tests__` folder run the test command
```bash
$ npm test
```
1. To build from ES6 to ES5:
```bash
$ gulp build
```

Enjoy! :ghost:
