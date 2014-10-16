var _fibonacci = function(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  var _ref = [0, 0, 1];
  var _index = _ref[0];
  var _pre = _ref[1];
  var _current = _ref[2];
  var _result = _ref[3];

  while(++_index < num) {
    _result = _pre + _current;
    _pre = _current;
    _current = _result;
  }

  return _result;
};

/*
 * Fibonacci with a recursive approach
 * Fib(n) = Fib(n-1) + Fib(n-2)
 * @author Ciro costa (https://github.com/cirocosta)
 */
var fib = function(n) {
  return n <= 1 ? n : (fib(n - 1) + fib(n - 2));
};

module.exports = {
	fibonacciRec: fib,
	fibonacci: _fibonacci
};
