let arrayReverse = require('../array/reverse');

let reverseString = (str) => arrayReverse(str.split('')).join('');

var rReverseString = (str) => {
  let lastChar = str.length - 1;
  return !str ? '' : str[lastChar] + rReverseString(str.substr(0, lastChar));
};

module.exports = {
	rReverseString,
	reverseString
};
