jest.dontMock('../fibonacci');

describe('fibonacci()', () => {
  it('should return the right value for fibonacci sequence', () => {
    let { fibonacci, fibonacciRec } = require('../fibonacci');

    expect(fibonacci(10) === fibonacciRec(10));
    expect(fibonacci(9) === fibonacciRec(9));

    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(9)).toBe(34);
  });
});
