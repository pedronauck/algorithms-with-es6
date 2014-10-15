var _arrIsEqual = require('../../utils/array-is-equal');

var _givenSum = function(_arrIsEqual) {
  return function(arr, sum) {
    var _ref = [-1, []];
    var _index = _ref[0];
    var _nums = _ref[1];

    while(++_index < arr.length) {
      var _x = arr[_index];

      arr.forEach(function(_x) {
        return function(_nums) {
          return function(y) {
            var _contains = _nums.filter(function(arr) {
              return _arrIsEqual(arr, [y,_x]);
            });

            if ((_x + y === sum) && (_contains.length === 0)) {
              _nums.push([_x, y]);
            }
          };
        };
      }(_x)(_nums));
    }

    return _nums.sort(function(a, b) {
      return a[0] - b[0];
    });
  };
}(_arrIsEqual);

module.exports = _givenSum;
