// get the input values so we can do things
var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split('');

/**
 *  moves santa to the next house
 *  @param {Array} pos
 *  @param {String} direction
 *  @return updated position
 */
function getNextHouse(pos, direction) {
	switch (direction) {
		case '^':
			return pos[1]++;
			break;
		case 'v':
			return pos[1]--;
			break;
		case '<':
			return pos[0]++;
			break;
		case '>':
			return pos[0]--;
			break;
	}
}

/**
 *  checks to see if santa has visited this house yet
 *  @param {Array} pos
 *  @param {Array} visited
 *  @return true if we've been here, false if not
 */
function checkHouse(pos, visited) {
	for (var i = 0; i < visited.length; i++) {
		if (visited[i][0] === pos[0] && visited[i][1] === pos[1]) {
			return true;
		}
	}
	
	return false;
}

/**
 *  deliver the presents!
 *  @param {Array} directions
 *  @param {Number} santas
 *  @return {Number} how many houses we've visited
 */
function deliverPresents(directions, santas) {
	var visited = [];
	var position = [];
	
	// set the starting position for each santa
	for (var i = 0; i < santas; i++) {
		position[i] = [0,0];
	}
	
	// add the starting position to our list of visited houses
	visited.push([position[0][0], position[0][1]]);
	
	// process each direction in the list
	for (var i = 0; i < directions.length; i += santas) {
		// move each santa in the proper direction
		for (var j = 0; j < santas; j++) {
			getNextHouse(position[j], directions[i+j]);
			// if this is a new house, add it to the visited list
			if (!checkHouse(position[j], visited)) {
				visited.push([position[j][0], position[j][1]]);
			}
		}
	}
	// return the number of unique houses we've visited
	return visited.length;
}

console.log(deliverPresents(input, 1));
console.log(deliverPresents(input, 2));