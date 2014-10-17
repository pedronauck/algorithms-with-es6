let stringContains = (str, substr) => {
  var contains = false;
  let [splitSubstr, splitStr] = [substr.split(''), str.split('')];

  splitStr.forEach((letter, i) => {
    (splitSubstr.map((foundLetter, j) => {
      if (splitStr[i + (j - 1)] === foundLetter) return splitStr[i + (j - 1)];
    }).join('') === substr) && (contains = true);
  });

  return contains;
};

module.exports = stringContains;
