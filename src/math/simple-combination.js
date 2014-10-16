let fac = require('./factorial');

let simpleCombination = (num, repetition) => {
  return fac(num) / (fac(repetition) * fac(num - repetition));
};

module.exports = simpleCombination;
