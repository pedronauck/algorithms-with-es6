(function() {
  var greatestCommonDivisor = function(a, b) {
    if (a < 2 && b < 2) return 1;

    var _ref = [1];
    var divisor = _ref[0];
    var result = _ref[1];

    while(++divisor <= Math.min(a, b)) {
      if (a % divisor === 0 && b % divisor === 0) {
        result = divisor;
      }
    }

    return result || 1;
  };

  module.exports = greatestCommonDivisor;
})();
