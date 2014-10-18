jest
	.dontMock('../../array/reverse')
  .dontMock('../reverse-string');

describe('reverseString()', () => {
  it('should return a reverse string', () => {
    let { rReverseString, reverseString } = require('../reverse-string');
    let str = 'abcde';

    expect(rReverseString(str)).toEqual('edcba');
    expect(reverseString(str)).toEqual('edcba');
  });
});
