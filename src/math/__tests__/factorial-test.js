jest.dontMock('../factorial');

describe('factorial()', () => {
  it('should return a factorial of a number', () => {
    let factorial = require('../factorial');

    expect(factorial(5)).toBe(120);
    expect(factorial(4)).toBe(24);
  });
});
