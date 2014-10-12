'use strict';

var to5 = require('6to5');

module.exports = {
  process: function (src, path) {
    return to5.transform(src).code;
  }
};
