jest
  .dontMock('../simple-combination')
  .dontMock('../fatorial');

describe('simple combination', () => {
  it('should calculate a simple math combination expression', () => {
    var simpleCombination = require('../simple-combination');

    expect(simpleCombination(6,2)).toBe(15);
  });
});
