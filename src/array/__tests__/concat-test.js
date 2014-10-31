jest.dontMock('../concat');

describe('concat()', () => {
  it('should concatenate arrays', () => {
    let concat = require('../concat');

    expect(concat([1,2,3],[4,5,6])).toEqual([1,2,3,4,5,6]);
  });
});
