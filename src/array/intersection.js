let concat = require('./concat.js');
let intersection = (...arrs) => {
  let newArr = [];

  concat(...arrs).forEach((item, index) => {
    concat(...arrs).forEach((newItem, newIndex) => {
      let isOtherIndex = index !== newIndex;
      let isOtherItem = item === newItem;
      let notExist = newArr.indexOf(newItem) < 0;

      (isOtherIndex && isOtherItem && notExist) && (newArr.push(newItem));
    });
  });

  return newArr;
};

module.exports = intersection;
