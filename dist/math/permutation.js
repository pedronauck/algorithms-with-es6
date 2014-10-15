var _fat = require('./fatorial');

var _permutation = function(_fat) {
  return function(num, repetition) {
    return _fat(num) / _fat(num - repetition);
  };
}(_fat);

module.exports = _permutation;
