"use strict";
var _isPalindrome = function(word) {
  var _ref = [word.length, true];
  var _len = _ref[0];
  var _result = _ref[1];

  for (var _i = 0; _i < _len / 2; _i++) {
    if (word[_i] !== word[_len - 1 - _i]) _result = false;
  }

  return _result;
};

module.exports = _isPalindrome;
