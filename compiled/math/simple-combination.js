"use strict";
var _fac = require('./factorial');

var _simpleCombination = function(num, rep) {
  return _fac(num) / (_fac(rep) * _fac(num - rep));
};

module.exports = _simpleCombination;
