"use strict";
var _stringContains = function(str, substr) {
  var contains = false;
  var _ref = [substr.split(''), str.split('')];
  var _splitSubstr = _ref[0];
  var _splitStr = _ref[1];

  _splitStr.forEach(function(_splitSubstr, _splitStr) {
    return function(letter, i) {
      (_splitSubstr.map(function(foundLetter, j) {
        if (_splitStr[i + (j - 1)] === foundLetter) return _splitStr[i + (j - 1)];
      }).join('') === substr) && (contains = true);
    };
  }(_splitSubstr, _splitStr));

  return contains;
};

var _rStrContains = function(a, b) {
  return !a ? false : (a === b ? true : _rStrContains(a.substr(1), b));
};

module.exports = {
  stringContains: _stringContains,
  rStrContains: _rStrContains
};
