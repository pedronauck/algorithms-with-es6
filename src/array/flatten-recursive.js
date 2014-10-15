let flatten = (arr) => {
  let newArr = [];
  
  // var to not cause undefined on ES5
  var recursiveArr = (arr) => {
    for ( let i = 0; i < arr.length; i++  ) {
      if ( Array.isArray(arr[i]) ) {
        recursiveArr(arr[i]);
      }
      else {
        newArr.push(arr[i]);
      }
    }
  }

  recursiveArr(arr);
  return newArr;
}

module.exports = flatten;