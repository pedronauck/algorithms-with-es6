let concat = (...arrs) => {
  let newArr = [];
  arrs.forEach(arr => arr.forEach(i => newArr.push(i)));
  return newArr;
};

module.exports = concat;
