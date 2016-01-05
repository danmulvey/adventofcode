// get the input values
var fs = require('fs');
var boxes = fs.readFileSync('input.txt').toString().split('\n');

// split up each line into values we can easily use
for (var i in boxes) {
	boxes[i] = boxes[i].split('x');
}

var total = 0;
var area  = boxes;

for (var i in boxes) {
	// convert side lengths into areas
	var l = boxes[i][0];
	var h = boxes[i][1];
	var w = boxes[i][2];
	
	area[i][0] = l * h;
	area[i][1] = l * w;
	area[i][2] = h * w;
	
	// add the amount of paper needed
	total += 2 * (area[i][0] + area[i][1] + area[i][2]) + Math.min.apply(Math, area[i]);
	
}

// print the total amount of paper needed (part 1)
console.log(total);