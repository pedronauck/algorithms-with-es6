let fibonacci = (num) => {
  if (num === 0) return 0;
  if (num === 1) return 1;

  let [index, pre, current, result] = [0, 0, 1];

  while(++index < num) {
    result = pre + current;
    pre = current;
    current = result;
  }

  return result;
};

/*
 * Fibonacci with a recursive approach
 * Fib(n) = Fib(n-1) + Fib(n-2)
 * @author Ciro costa (https://github.com/cirocosta)
 */
var fib = (n) => n <= 1 ? n : (fib(n - 1) + fib(n - 2));

module.exports = {
	fibonacciRec: fib,
	fibonacci: fibonacci
};
