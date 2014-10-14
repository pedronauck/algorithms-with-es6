jest.dontMock('../is-prime');

describe('isPrime()', () => {
  it('should return if an number is a prime number or not', () => {
    var isPrime = require('../is-prime');

    expect(isPrime(137)).toBe(true);
    expect(isPrime(237)).toBe(false);
  });
});
