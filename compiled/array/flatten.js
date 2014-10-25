"use strict";
var _flatten = function(arr, givenArr) {
  if (givenArr === undefined)
    givenArr = [];

  arr.forEach(function(item) {
    (Array.isArray(item)) && (_flatten(item, givenArr));
    (!Array.isArray(item)) && (givenArr.push(item));
  });

  return givenArr;
};

module.exports = _flatten;
