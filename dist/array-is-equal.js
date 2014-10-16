(function() {
  var arrIsEqual = function(arrX, arrY) {
    if (arrX.length !== arrY.length) return false;
    if (!Array.isArray(arrX) || !Array.isArray(arrY)) return false;

    var _ref = [-1, true];
    var index = _ref[0];
    var isEqual = _ref[1];

    while (++index <= arrX.length) {
      if (arrX[index] !== arrY[index]) {
        isEqual = false;
      }
    }

    return isEqual;
  };

  module.exports = arrIsEqual;
})();
