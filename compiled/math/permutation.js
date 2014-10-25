"use strict";
var _fac = require('./factorial');

var _permutation = function(num, repetition) {
  return _fac(num) / _fac(num - repetition);
};

module.exports = _permutation;
