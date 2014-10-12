jest.dontMock('../fatorial');

describe('fatorial()', () => {
  it('should return a fatorial of a number', () => {
    let fatorial = require('../fatorial');

    expect(fatorial(5)).toBe(120);
    expect(fatorial(4)).toBe(24);
  });
});
