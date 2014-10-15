let flatten = (arr) => {
  let newArr = [];
  let checkArray = (item) => {
    if (Array.isArray(item)) {
      item.forEach(checkArray);
    }
    else {
      if (newArr.indexOf(item) === -1) {
        newArr.push(item);
      }
    }
  };

  arr.forEach(checkArray);
  return newArr.sort((a, b) => a - b);
};

module.exports = flatten;