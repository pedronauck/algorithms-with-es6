let removeFromArr = (arr, val) => {
  for(let i = arr.length - 1; i >= 0; i--){
    if(arr[i] === val) 
      arr.splice(i, 1);
  }
  return arr;
};

module.exports = removeFromArr;
