let reorderByIndexes = (arr, indexes) => {
  return [for (n of indexes) arr[n]];
};

module.exports = reorderByIndexes;
