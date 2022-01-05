// get the input values
var fs = require('fs');
var input = fs.readFileSync('input.txt').toString();

var up = 0;
var down = 0;

for (var i = 0; i < input.length; i++) {
	if (input[i] === '(') {
		up++;
	} else if (input[i] === ')') {
		down++;
	}
	
	if (up - down === -1) {
		console.log("entered basement at: " + (i + 1));
	}
}

console.log(up - down);