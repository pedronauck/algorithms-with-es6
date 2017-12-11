let givenSum = (arr, sum) => {

  // For each pari of results we need to return, keep the smaller value as a key
  // on the object results to avoid duplicates
  let results = {};

  // allElements allows to quickly check if a number is in the original array
  let allElements = {};

  // Check to see if a number occurs twice
  arr.forEach((x) => { 
    if(allElements[x] === false)
      allElements[x] = true;
    else 
      allElements[x] = false;
  });

  arr.forEach((x) => {
    let complement = sum - x;
  
    if(x > complement) {
      return; 
    }
  
    // If a number is flagged to occur at least twice, add it as a pair
    if(x === complement){
      if(allElements[complement] === true) 
        results[x] = [x, complement];
    }
    else {
      if(allElements[complement] === false) {
        results[x] = [x, complement];
      }
    }
  });

  return Object.keys(results).map(k => results[k]);
};

module.exports = givenSum;
