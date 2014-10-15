var _flatten = function(arr) {
  var _newArr = [];
  var _checkArray = function(_checkArray) {
    return function(_newArr) {
      return function(item) {
        if (Array.isArray(item)) {
          item.forEach(_checkArray);
        }
        else {
          if (_newArr.indexOf(item) === -1) {
            _newArr.push(item);
          }
        }
      };
    };
  }(_checkArray)(_newArr);

  arr.forEach(_checkArray);
  return _newArr.sort(function(a, b) {
    return a - b;
  });
};

module.exports = _flatten;
