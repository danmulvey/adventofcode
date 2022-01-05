// get the list of directions from our input file
var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split('\n');

// create our grid of lights, all starting in the off position
var lights = [];
for (var i = 0; i < 1000; i++) {
	lights[i] = [];
	for (var j = 0; j < 1000; j++) {
		lights[i][j] = false;
	}
}

function processCommands(commands) {
	// match the info we need to use
	var regex = /(\w.*) (\d+),(\d+) \w+ (\d+),(\d+)/;
	
	for (var i = 0; i < commands.length; i++) {
		// process each command in the list
		var currentCommand = commands[i].match(regex);
		currentCommand.shift();
		
		// actually run the command
		changeLights(currentCommand[0], 
					 +currentCommand[1], 
					 +currentCommand[2], 
					 +currentCommand[3], 
					 +currentCommand[4]);
	}
}

function changeLights(command, x1, y1, x2, y2) {
	for (var i = x1; i <= x2; i++) {
		for (var j = y1; j <= y2; j++) {
			switch(command) {
				case "turn on":
					lights[i][j] = true;
					break;
				case "turn off":
					lights[i][j] = false;
					break;
				case "toggle":
					lights[i][j] = !lights[i][j];
					break;
			}
		}
	}
}

processCommands(input);
var lightsOn = 0;
for (var i = 0; i < 1000; i++) {
	for (var j = 0; j < 1000; j++) {
		if (lights[i][j] === true) {
			lightsOn++;
		}
	}
}
console.log(lightsOn);