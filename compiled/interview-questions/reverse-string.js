var _arrayReverse = require('../array/reverse');

var _reverseStr = function(_arrayReverse) {
  return function(str) {
    return _arrayReverse(str.split('')).join('');
  };
}(_arrayReverse);

var rReverseStr = function(str) {
  var _lastChar = str.length - 1;
  return !str ? '' : str[_lastChar] + rReverseStr(str.substr(0, _lastChar));
};

module.exports = {
  rReverseStr: rReverseStr,
  reverseStr: _reverseStr
};
