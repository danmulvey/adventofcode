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
 *  @return {Number} how many houses we've visited
 */
function deliverPresents(directions) {
	var visited = [];
	var position = [0,0];
	
	visited.push([position[0], position[1]]);
	
	for (var i = 0; i < directions.length; i++) {
		getNextHouse(position, directions[i]);
		if (!checkHouse(position, visited)) {
			visited.push([position[0], position[1]]);
		}
	}
	
	return visited.length;
}

console.log(deliverPresents(input));