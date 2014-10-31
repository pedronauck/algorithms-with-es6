let concat = require('./concat');
let { removeDuplicates } = require('./remove-duplicates');

let union = (...arrs) => removeDuplicates(concat(...arrs));

module.exports = union;
