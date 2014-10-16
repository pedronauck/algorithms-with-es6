(function() {
  var fat = require('./fatorial');

  var simpleCombination = function(num, repetition) {
    return fat(num) / (fat(repetition) * fat(num - repetition));
  };

  module.exports = simpleCombination;
})();
