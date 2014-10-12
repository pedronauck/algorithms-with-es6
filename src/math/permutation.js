let fat = require('./fatorial');

let permutation = (num, repetition) => {
  return fat(num) / fat(num - repetition);
};

module.exports = permutation;
