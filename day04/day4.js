var crypto = require('crypto');
var input = "bgvyzdsv";

function findHash(start, beginsWith) {
	// starting at input + zero, find the first md5 hash that begins with "beginsWith"
	var success = false;
	while (!success) {
		if (crypto.createHash('md5').update(input + start.toString()).digest('hex').startsWith(beginsWith)) {
			success = true;
		} else {
			start++;
		}
	}
	
	return start;
}

console.log("Part 1: " + findHash(0, "00000"));
console.log("Part 2: " + findHash(0, "000000"));