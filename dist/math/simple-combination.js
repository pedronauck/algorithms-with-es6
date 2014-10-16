var _fac = require('./factorial');

var _simpleCombination = function(_fac) {
  return function(num, repetition) {
    return _fac(num) / (_fac(repetition) * _fac(num - repetition));
  };
}(_fac);

module.exports = _simpleCombination;
