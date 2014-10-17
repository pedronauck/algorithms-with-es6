jest.dontMock('../string-contains');

describe('stringContains()', () => {
  it('should return if a string contains in other', () => {
    var stringContains = require('../string-contains');

    expect(stringContains('John', 'hn')).toBe(true);
    expect(stringContains('Ana', 'na')).toBe(true);
    expect(stringContains('Joanana', 'ana')).toBe(true);
    expect(stringContains('Joe', 'op')).toBe(false);
  });
});
