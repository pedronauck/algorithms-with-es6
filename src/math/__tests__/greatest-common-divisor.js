jest.dontMock('../greatest-common-divisor');

describe('greatestCommonDivisor()', () => {
  it('should return a greatest common divisor of two numbers', () => {
    var greatestCommonDivisor = require('../greatest-common-divisor');

    expect(greatestCommonDivisor(14, 21)).toBe(7);
    expect(greatestCommonDivisor(20, 10)).toBe(10);
  });
});
