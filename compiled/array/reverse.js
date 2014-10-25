"use strict";
var _reverse = function(arr) {
  var _index = arr.length;
  return arr.map(function(_index) {
    return function() {
      return arr[--_index];
    };
  }(_index));
};

module.exports = _reverse;
