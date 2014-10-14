let isPalindrome = (word) => {
  let len = word.length;
  let result = true;

  for (let i = 0; i < len / 2; i++) {
    if (word[i] !== word[len - 1 - i]) result = false;
  }

  return result;
}

module.exports = isPalindrome;
