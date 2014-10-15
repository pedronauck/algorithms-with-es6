var _greatestCommonDivisor = function(a, b) {
  if (a < 2 && b < 2) return 1;

  var _ref = [1];
  var _divisor = _ref[0];
  var _result = _ref[1];

  while(++_divisor <= Math.min(a, b)) {
    if (a % _divisor === 0 && b % _divisor === 0) {
      _result = _divisor;
    }
  }

  return _result || 1;
};

module.exports = _greatestCommonDivisor;
