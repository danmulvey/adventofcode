// get the list of directions from our input file
var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split('\n');

// create our grid of lights, all starting in the off position
var lights = [];
for (var i = 0; i < 1000; i++) {
	lights[i] = [];
	for (var j = 0; j < 1000; j++) {
		lights[i][j] = false;
		console.log(i + ' ' + j + ' ' + lights[i][j]);
	}
}

function processCommands(commands) {
	// match the info we need to use
	var regex = /(\w.*) (\d+),(\d+) \w+ (\d+),(\d+)/;
	var command;
	var x1, y1, x2, y2;
	
	for (var i = 0; i < commands.length; i++) {
		// process each command in the list
		var currentCommand = commands[i].match(regex);
		currentCommand.shift();
		
		
		console.log(currentCommand);
	}
}

function changeLight(command, x1, y1, x2, y2) {
	
}