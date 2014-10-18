let fac = require('./factorial');

let simpleCombination = (num, rep) => fac(num) / (fac(rep) * fac(num - rep));

module.exports = simpleCombination;
