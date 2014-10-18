jest
	.dontMock('../../array/reverse')
  .dontMock('../reverse-string');

describe('reverseStr()', () => {
  it('should return a reverse string', () => {
    let { rReverseStr, reverseStr } = require('../reverse-string');
    let str = 'abcde';

    expect(rReverseStr(str)).toEqual('edcba');
    expect(reverseStr(str)).toEqual('edcba');
  });
});
