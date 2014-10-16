'use strict';

module.exports = {
  process: function (src, path) {
    return require('6to5').transform(src).code;
  }
};
