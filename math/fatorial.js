'use strict';

let fatorial = (num) => {
  let result = 1;
  while (--num) result *= num + 1;
  return result;
};

module.exports = fatorial;
