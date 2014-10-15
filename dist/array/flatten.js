var _flatten = function(arr) {
  var _newArr = [];

  recursiveArr = function(_newArr) {
    return function(arr) {
      // Go through all items in the array
      for ( var _i = 0; _i < arr.length; _i++  ) {
        // Check if item is an Array
        // if so call same function until no more Arrays found
        // and push to new array
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