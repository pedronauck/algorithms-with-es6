jest
  .dontMock('../given-sum');

describe('givenSum()', () => {
  it('should return two numbers that the sum is equal other number as second argument', () => {
    var givenSum = require('../given-sum');

    expect(givenSum([1, 2, 4, 7, 11, 15], 15)).toEqual([[4, 11]]);
    expect(givenSum([2, 3, 4, 5, 6], 7)).toEqual([[2, 5], [3, 4]]);
  });
  
  describe('for very large array', () => {
    var givenSum = require('../given-sum');

    var largeArray = [];
    for (var i = 0; i < 10000; i++) {
      largeArray.push(i);
    }
    
    it('returns correct result', () => {
      expect(givenSum(largeArray, 3)).toEqual([[0, 3], [1, 2]]);
    });

    it('runs in O(N) time', () => {
      var startTime = Date.now();
      givenSum(largeArray, 3);
      var endTime = Date.now();
      
      var elapsedMilliseconds = endTime - startTime;
      
      expect(elapsedMilliseconds).toBeLessThan(5);
    });
  });
});
