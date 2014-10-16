(function() {
  var isPalindrome = function(word) {
    var _ref = [word.length, true];
    var len = _ref[0];
    var result = _ref[1];

    (function() {
      for (var i = 0; i < len / 2; i++) {
        if (word[i] !== word[len - 1 - i]) result = false;
      }
    })();

    return result;
  };

  module.exports = isPalindrome;
})();
