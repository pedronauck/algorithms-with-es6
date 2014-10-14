jest.dontMock('../is-palindrome');

describe('isPalindrome', () => {
  it('should return if word is a palindrome or not', () => {
    var isPalindrome = require('../is-palindrome');

    expect(isPalindrome('madam')).toBe(true);
    expect(isPalindrome('anna')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
  });
});
