var _reorderByIndexes = function(arr, indexes) {
  return indexes.map(function(n) {
    return arr[n];
  });
};

module.exports = _reorderByIndexes;
