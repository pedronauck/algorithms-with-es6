jest.dontMock('../array-is-equal');

describe('arrIsEqual', () => {
  it('should return if two arrays is equal', () => {
    var arrIsEqual = require('../array-is-equal');

    expect(arrIsEqual([1,2], [1,2])).toBe(true);
    expect(arrIsEqual([1,2], [2,1])).toBe(false);
    expect(arrIsEqual([1,2], ['1', 2])).toBe(false);
  });
});
