// get the input values
var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split('\n');

// split up each line into values we can easily use
for (var i in array) {
	array[i] = array[i].split('x');
}

