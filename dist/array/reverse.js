(function() {
  var reverse = function(arr) {
    var _ref = [new Array(), arr.length];
    var newArr = _ref[0];
    var index = _ref[1];

    while (--index >= 0) {
      newArr.push(arr[index]);
    }

    return newArr;
  };

  module.exports = reverse;
})();
