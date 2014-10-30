let removeDuplicates = (arr, newArr = []) => {
  arr.forEach(item => newArr.indexOf(item) < 0 && newArr.push(item));
  return newArr;
};

let rRemoveDuplicates = (arr, index = 0, newArr = []) => {
  newArr.indexOf(arr[index]) === -1 && newArr.push(arr[index]);
  return index < arr.length - 1 ? rRemoveDuplicates(arr, ++index, newArr) : newArr;
};

module.exports = { removeDuplicates, rRemoveDuplicates };
