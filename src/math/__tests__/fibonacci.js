jest.dontMock('../fibonacci');

describe('fibonacci()', () => {
  it('should return the right value for fibonacci sequence', () => {
    let fibonacci = require('../fibonacci');

    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(9)).toBe(34);
  });
});
