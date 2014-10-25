"use strict";
var _factorial = function(num) {
  var _result = 1;
  while (--num) _result *= num + 1;
  return _result;
};

module.exports = _factorial;
