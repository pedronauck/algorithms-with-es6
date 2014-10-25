"use strict";
var _gcd = function(a, b) {
  return !b ? a : _gcd(b, a % b);
};

module.exports = _gcd;
