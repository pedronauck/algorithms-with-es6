let isPrime = function(num) {
  if (num % 2 === 0) return false;
  if (num === 2 || num === 3) return true;

  let [divisor, limit] = [3, Math.sqrt(num)];

  while (divisor <= limit) {
    if (num % divisor === 0) return false;
    divisor += 2;
  }

  return true;
};

module.exports = isPrime;
