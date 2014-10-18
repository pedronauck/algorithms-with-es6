let fac = require('./factorial');

let permutation = (num, repetition) => fac(num) / fac(num - repetition);

module.exports = permutation;
