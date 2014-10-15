var _flatten = function(arr) {
  var _newArr = [];
  
  recursiveArr = function(_newArr) {
    return function(arr) {
      for ( var _i = 0; _i < arr.length; _i++  ) {
        if ( Array.isArray(arr[_i]) ) {
          recursiveArr(arr[_i]);
        }
        else {
          _newArr.push(arr[_i]);
        }
      }
    };
  }(_newArr)

  recursiveArr(arr);
  return _newArr;
};

module.exports = _flatten;