jest.dontMock('../flatten');

describe('flatten()', () => {
  it('should flatten an array', () => {
    var flatten = require('../flatten');
    var unflattenedArr = [1,[2,[[2, 3, 4],5],6]];

    expect(flatten(unflattenedArr)).toEqual([1,2,2,3,4,5,6]);
  });
});
