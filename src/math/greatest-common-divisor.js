let greatestCommonDivisor = (a, b) => {
  if (a < 2 && b < 2) return 1;

  let [divisor, result] = [1];

  while(++divisor <= Math.min(a, b)) {
    if (a % divisor === 0 && b % divisor === 0) {
      result = divisor;
    }
  }

  return result || 1;
};

module.exports = greatestCommonDivisor;
