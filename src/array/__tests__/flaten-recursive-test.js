jest.dontMock('../flatten-recursive');

describe('flatten()', () => {
  it('should flatten an array with recursive', () => {
    var flatten = require('../flatten-recursive');
    var unflattenedArr = [1, [2, 3, 4], 5, [6, 7]];

    expect(flatten(unflattenedArr)).toEqual([1,2,3,4,5,6,7]);
  });
});
