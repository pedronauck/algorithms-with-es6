"use strict";
var _arrIsEqual = require('../../utils/array-is-equal');

var _givenSum = function(arr, sum) {
  var _nums = [];

  arr.forEach(function(_nums) {
    return function(x) {
      arr.forEach(function(y) {
        var _contains = _nums.filter(function(arr) {
          return _arrIsEqual(arr, [y,x]);
        });
        ((x + y === sum) && (_contains.length === 0)) && (_nums.push([x, y]));
      });
    };
  }(_nums));

  return _nums.sort(function(a, b) {
    return a[0] - b[0];
  });
};

module.exports = _givenSum;
