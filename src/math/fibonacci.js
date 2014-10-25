let fibonacci = (num) => {
  if (num <= 1) return num;
  let [previous, current, result] = [0, 1];

  for (let i = 1; i < num; i++) {
    let temp = previous + current;
    [previous, current] = [current, current = result = temp];
  }

  return result;
};

let fib = (n) => n <= 1 ? n : (fib(n - 1) + fib(n - 2));

module.exports = {
	fibonacciRec: fib,
	fibonacci: fibonacci
};
