let arrIsEqual = require('../utils/array-is-equal');

let givenSum = (arr, sum) => {
  let [index, nums] = [-1, []];

  while(++index < arr.length) {
    let x = arr[index];

    arr.forEach((y) => {
      let contains = nums.filter((arr) => arrIsEqual(arr, [y,x]));

      if ((x + y === sum) && (contains.length === 0)) {
        nums.push([x, y]);
      }
    });
  }

  return nums.sort((a, b) => a[0] - b[0]);
};

module.exports = givenSum;
