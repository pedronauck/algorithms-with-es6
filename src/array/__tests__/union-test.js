jest
  .dontMock('../union')
  .dontMock('../concat')
  .dontMock('../remove-duplicates');

describe('union()', () => {
  it('should return the union between arrays', () => {
    let union = require('../union');

    expect(union([1,2,3],[5,2,1,4], [2,1])).toEqual([1,2,3,5,4]);
  });
});
