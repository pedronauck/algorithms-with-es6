let flatten = (arr) => {
  let newArr = [];
  
  recursiveArr = (arr) => {
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