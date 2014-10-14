let isPalindrome = (word) => {
  let [len, result] = [word.length, true];

  for (let i = 0; i < len / 2; i++) {
    if (word[i] !== word[len - 1 - i]) result = false;
  }

  return result;
}

module.exports = isPalindrome;
