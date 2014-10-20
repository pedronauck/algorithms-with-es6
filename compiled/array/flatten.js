var _flatten = function(arr) {
  var _newArr = [];

  var recursiveArr = function(_newArr) {
    return function(givenArr) {
      givenArr.forEach(function(item) {
        (Array.isArray(item)) && (recursiveArr(item));
        (!Array.isArray(item)) && (_newArr.push(item));
      });
    };
  }(_newArr);

  recursiveArr(arr);
  return _newArr;
};

module.exports = _flatten;
