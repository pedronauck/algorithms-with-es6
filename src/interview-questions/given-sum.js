let arrIsEqual = require('../../utils/array-is-equal');

let givenSum = (arr, sum) => {
  let nums = [];

  arr.forEach((x) => {
    arr.forEach((y) => {
      let contains = nums.filter((arr) => arrIsEqual(arr, [y,x]));
      ((x + y === sum) && (contains.length === 0)) && (nums.push([x, y]));
    });
  });

  return nums.sort((a, b) => a[0] - b[0]);
};

module.exports = givenSum;
