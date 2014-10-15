var _reverse = function(arr) {
  var _ref = [new Array(), arr.length];
  var _newArr = _ref[0];
  var _index = _ref[1];

  while (--_index >= 0) {
    _newArr.push(arr[_index]);
  }

  return _newArr;
};

module.exports = _reverse;
