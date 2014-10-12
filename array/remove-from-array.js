let removeFromArr = (arr, val) => {
  arr.forEach((num, i) => { if (num === val) arr.splice(i, 1) });
};

module.exports = removeFromArr;
