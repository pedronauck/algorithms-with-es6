"use strict";
var _isPrime = function(num) {
  if (num % 2 === 0) return false;
  if (num === 2 || num === 3) return true;

  var _ref = [3, Math.sqrt(num)];
  var _divisor = _ref[0];
  var _limit = _ref[1];

  while (_divisor <= _limit) {
    if (num % _divisor === 0) return false;
    _divisor += 2;
  }

  return true;
};

module.exports = _isPrime;
