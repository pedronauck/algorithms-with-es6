(function() {
  var fat = require('./fatorial');

  var permutation = function(num, repetition) {
    return fat(num) / fat(num - repetition);
  };

  module.exports = permutation;
})();
