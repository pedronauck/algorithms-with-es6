jest.dontMock('../reverse');

describe('reverse()', () => {
  it('should reverse an array', () => {
    var reverse = require('../reverse');
    var arr = [0,1,2,3,4];
    var reversedArr = reverse(arr);

    expect(reversedArr).toEqual([4,3,2,1,0]);
  });
});
