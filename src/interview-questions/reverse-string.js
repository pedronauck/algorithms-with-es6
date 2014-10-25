let arrayReverse = require('../array/reverse');

let reverseStr = (str) => arrayReverse(str.split('')).join('');

let rReverseStr = (str) => {
  let lastChar = str.length - 1;
  return !str ? '' : str[lastChar] + rReverseStr(str.substr(0, lastChar));
};

module.exports = {
  rReverseStr,
  reverseStr
};
