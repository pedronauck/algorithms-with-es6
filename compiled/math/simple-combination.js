var _fac = require('./factorial');

var _simpleCombination = function(_fac) {
  return function(num, rep) {
    return _fac(num) / (_fac(rep) * _fac(num - rep));
  };
}(_fac);

module.exports = _simpleCombination;
