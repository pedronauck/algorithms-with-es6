let fat = require('./fatorial');

let simpleCombination = (num, repetition) => {
  return fat(num) / (fat(repetition) * fat(num - repetition));
};

module.exports = simpleCombination;
