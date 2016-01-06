// get the input values and
// split up each line into values we can easily use
var fs = require('fs');
var boxes = fs.readFileSync('input.txt').toString().split('\n').map(function(s)
                            { return s.split('x').map(Number) });

var totalArea = 0;
var totalLength = 0;

for (var i = 0; i < boxes.length; i++) {
	// convert side lengths into areas
	var l = boxes[i][0];
	var h = boxes[i][1];
	var w = boxes[i][2];
	
	// add the amount of paper needed
	totalArea += 2 * ((l*h) + (l*w) + (h*w)) + Math.min(l*h, l*w, h*w);
	
	// add the amount of ribbon needed
	totalLength += 2 * Math.min(l+h, l+w, h+w) + l*h*w;
}

// print the total amount of paper needed (part 1)
console.log(totalArea);

// print the total amount of ribbon needed (part 2)
console.log(totalLength);