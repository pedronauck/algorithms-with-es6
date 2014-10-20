var _fac = require('./factorial');

var _permutation = function(_fac) {
  return function(num, repetition) {
    return _fac(num) / _fac(num - repetition);
  };
}(_fac);

module.exports = _permutation;
