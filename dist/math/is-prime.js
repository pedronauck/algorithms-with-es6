(function() {
  var isPrime = function(num) {
    if (num % 2 === 0) return false;
    if (num === 2 || num === 3) return true;

    var _ref = [3, Math.sqrt(num)];
    var divisor = _ref[0];
    var limit = _ref[1];

    while (divisor <= limit) {
      if (num % divisor === 0) return false;
      divisor += 2;
    }

    return true;
  };

  module.exports = isPrime;
})();
