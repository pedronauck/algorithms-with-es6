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

module.exports = fibonacci;
