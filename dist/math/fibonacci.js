(function() {
  var fibonacci = function(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;

    var _ref = [0, 0, 1];
    var index = _ref[0];
    var pre = _ref[1];
    var current = _ref[2];
    var result = _ref[3];

    while(++index < num) {
      result = pre + current;
      pre = current;
      current = result;
    }

    return result;
  };

  module.exports = fibonacci;
})();
