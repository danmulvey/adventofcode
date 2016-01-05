// get the input values
var fs = require('fs');
var boxes = fs.readFileSync('input.txt').toString().split('\n');

var total = 0;

// split up each line into values we can easily use
for (var i in boxes) {
	boxes[i] = boxes[i].split('x');
}

for (var i in boxes) {
	// convert side lengths into areas
	var l = boxes[i][0];
	var h = boxes[i][1];
	var w = boxes[i][2];
	
	boxes[i][0] = l * h;
	boxes[i][1] = l * w;
	boxes[i][2] = h * w;
	
	// add the amount of paper needed
	total += 2 * (boxes[i][0] + boxes[i][1] + boxes[i][2]) + Math.min.apply(Math, boxes[i]);
	
}

// print the total amount of paper needed (part 1)
console.log(total);