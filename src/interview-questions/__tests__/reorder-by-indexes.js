jest.dontMock('../reorder-by-indexes');

describe('reorderByIndexes()', () => {
  it('should reorder an array by other array with indexes', () => {
    var reorderByIndexes = require('../reorder-by-indexes');
    var arr = ['a','b','c','d','e','f'];
    var indexes = [2, 3, 4, 0, 5, 1];
    var orderedArr = reorderByIndexes(arr, indexes);

    expect(orderedArr).toEqual(['c','d','e','a','f','b']);
  });
});
