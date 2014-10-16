let flatten = (arr) => {
  let newArr = [];

  let recursiveArr = (givenArr) => {
    givenArr.forEach((item) => {
      (Array.isArray(item)) && (recursiveArr(item));
      (!Array.isArray(item)) && (newArr.push(item));
    });
  };

  recursiveArr(arr);
  return newArr;
}

module.exports = flatten;
