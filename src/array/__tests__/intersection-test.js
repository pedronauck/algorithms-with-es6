jest
  .dontMock('../intersection')
  .dontMock('../concat');

describe('intersection()', () => {
  it('should return the intersection between arrays', () => {
    let intersection = require('../intersection');

    expect(intersection([1,2,3],[5,2,1,4],[2,1])).toEqual([1,2]);
  });
});
