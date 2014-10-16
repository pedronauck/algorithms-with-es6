(function() {
  var removeFromArr = function(arr, val) {
    arr.forEach(function(num, i) { if (num === val) arr.splice(i, 1) });
  };

  module.exports = removeFromArr;
})();
