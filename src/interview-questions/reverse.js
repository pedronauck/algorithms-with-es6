let arrayReverse = require('../array/reverse');

let reverse = str => arrayReverse(str.split('')).join('');
var rReverse = str => !str ?
	'' :
	str[str.length-1] + rReverse(str.substr(0, str.length-1));


module.exports = {
	rReverse,
	reverse
};
