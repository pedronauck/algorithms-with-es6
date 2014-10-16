jest
  .dontMock('../permutation')
  .dontMock('../factorial');

describe('permutation()', () => {
  it('should calculate a permutation math expression', () => {
    var permutation = require('../permutation');

    expect(permutation(6,2)).toBe(30);
    expect(permutation(3,2)).toBe(6);
    expect(permutation(7,3)).toBe(210);
  });
});
