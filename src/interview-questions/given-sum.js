let givenSum = (arr, sum) => {
  // For each pair of results we need to return,
  // keep the smaller value as a key on the object `results`
  // to avoid returning duplicates.
  let results = {};

  // `allElements` allows to quickly check if a number is in the original array
  let allElements = {};
  arr.forEach((x) => { allElements[x] = true; });
  
  arr.forEach((x) => { 
    let complement = sum - x;
    
    // avoid mirror duplicates
    if (x > complement) {
      return;
    }
    
    if (allElements[complement]) {
      results[x] = [x, complement];
    }
  });

  return Object.keys(results).map(k => results[k]);
};

module.exports = givenSum;
