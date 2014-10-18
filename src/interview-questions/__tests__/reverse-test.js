jest
	.dontMock('../../array/reverse')
  .dontMock('../reverse');

describe('reverse()', () => {
  it('reverse a string', () => {
    let { rReverse, reverse } = require('../reverse');
    let str = 'abcde';

    expect(rReverse(str)).toEqual('edcba');
    expect(reverse(str)).toEqual('edcba');
  });
});
