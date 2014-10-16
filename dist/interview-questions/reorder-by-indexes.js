(function() {
  var reorderByIndexes = function(arr, indexes) {
    return indexes.map(function(n) {
      return arr[n];
    });
  };

  module.exports = reorderByIndexes;
})();
