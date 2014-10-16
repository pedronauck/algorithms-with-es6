(function() {
  var flatten = function(arr) {
    var newArr = [];

    var recursiveArr = function(givenArr) {
      givenArr.forEach(function(item) {
        (Array.isArray(item)) && (recursiveArr(item));
        (!Array.isArray(item)) && (newArr.push(item));
      });
    };

    recursiveArr(arr);
    return newArr;
  };

  module.exports = flatten;
})();
