(function() {
  var fatorial = function(num) {
    var result = 1;
    while (--num) result *= num + 1;
    return result;
  };

  module.exports = fatorial;
})();
