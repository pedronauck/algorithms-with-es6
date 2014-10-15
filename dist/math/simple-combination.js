var _fat = require('./fatorial');

var _simpleCombination = function(_fat) {
  return function(num, repetition) {
    return _fat(num) / (_fat(repetition) * _fat(num - repetition));
  };
}(_fat);

module.exports = _simpleCombination;
