(function() {
  var arrIsEqual = require('../../utils/array-is-equal');

  var givenSum = function(arr, sum) {
    var _ref = [-1, []];
    var index = _ref[0];
    var nums = _ref[1];

    while(++index < arr.length) {
      (function() {
        var x = arr[index];

        arr.forEach(function(y) {
          var contains = nums.filter(function(arr) {
            return arrIsEqual(arr, [y,x]);
          });

          if ((x + y === sum) && (contains.length === 0)) {
            nums.push([x, y]);
          }
        });
      })();
    }

    return nums.sort(function(a, b) {
      return a[0] - b[0];
    });
  };

  module.exports = givenSum;
})();
