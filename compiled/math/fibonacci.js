"use strict";
var _fibonacci = function(num) {
  if (num <= 1) return num;
  var _ref = [0, 1];
  var _previous = _ref[0];
  var _current = _ref[1];
  var _result = _ref[2];

  for (var _i = 1; _i < num; _i++) {
    var _temp = _previous + _current;
    var _ref2 = [_current, _current = _result = _temp];
    _previous = _ref2[0];
    _current = _ref2[1];
  }

  return _result;
};

var _fib = function(n) {
  return n <= 1 ? n : (_fib(n - 1) + _fib(n - 2));
};

module.exports = {
    fibonacciRec: _fib,
    fibonacci: _fibonacci
};
