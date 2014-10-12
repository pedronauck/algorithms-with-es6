let reverse = (arr) => {
  let newArr = [],
      index = arr.length;

  while (--index >= 0) {
    newArr.push(arr[index]);
  }

  return newArr;
};

module.exports = reverse;
