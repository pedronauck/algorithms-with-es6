"use strict";
var _arrayReverse = require('../array/reverse');

var _reverseStr = function(str) {
  return _arrayReverse(str.split('')).join('');
};

var _rReverseStr = function(str) {
  var _lastChar = str.length - 1;
  return !str ? '' : str[_lastChar] + _rReverseStr(str.substr(0, _lastChar));
};

module.exports = {
  rReverseStr: _rReverseStr,
  reverseStr: _reverseStr
};
