var gcd = function(a, b) {
  return !b ? a : gcd(b, a % b);
};

module.exports = gcd;
