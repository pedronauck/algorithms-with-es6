"use strict";
var _arrIsEqual = function(arrX, arrY) {
  if (arrX.length !== arrY.length) return false;
  if (!Array.isArray(arrX) || !Array.isArray(arrY)) return false;

  var _ref = [-1, true];
  var _index = _ref[0];
  var _isEqual = _ref[1];

  while (++_index <= arrX.length) {
    if (arrX[_index] !== arrY[_index]) {
      _isEqual = false;
    }
  }

  return _isEqual;
};

module.exports = _arrIsEqual;
