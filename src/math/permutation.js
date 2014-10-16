let fac = require('./factorial');

let permutation = (num, repetition) => {
  return fac(num) / fac(num - repetition);
};

module.exports = permutation;
