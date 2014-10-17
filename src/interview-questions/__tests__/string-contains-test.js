jest.dontMock('../string-contains');

describe('stringContains()', () => {
  it('should return if a string contains in other', () => {
    var { stringContains, rStrContains } = require('../string-contains');

    expect(stringContains('John', 'hn')).toBe(true);
    expect(stringContains('Ana', 'na')).toBe(true);
    expect(stringContains('Joanana', 'ana')).toBe(true);
    expect(stringContains('Joe', 'op')).toBe(false);

    expect(rStrContains('John', 'hn')).toBe(true);
    expect(rStrContains('Ana', 'na')).toBe(true);
    expect(rStrContains('Joanana', 'ana')).toBe(true);
    expect(rStrContains('Joe', 'op')).toBe(false);
  });
});
