let flatten = (arr) => {
  let newArr = [];
  var checkArray = (item) => {
    if (Array.isArray(item)) {
      item.forEach(checkArray);
    } else {
      if (newArr.indexOf(item) === -1) {
        newArr.push(item);
      }
    }
  };

  arr.forEach(checkArray);
  return newArr.sort((a, b) => a - b);
};

module.exports = flatten;