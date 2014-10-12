jest
  .dontMock('../given-sum')
  .dontMock('../../../utils/array-is-equal');

describe('givenSum()', () => {
  it('should return two numbers that the sum is equal other number as second argument', () => {
    var givenSum = require('../given-sum');

    expect(givenSum([1, 2, 4, 7, 11, 15], 15)).toEqual([[4, 11]]);
    expect(givenSum([2, 3, 4, 5, 6], 7)).toEqual([[2, 5], [3, 4]]);
  });
});
