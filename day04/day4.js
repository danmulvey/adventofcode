var crypto = require('crypto');

var input = "bgvyzdsv";
var result = 0;
var begin = "00000";
var success = false;

// starting at input + zero, find the first md5 hash that begins with 5 zeros
while (!success) {
	if (crypto.createHash('md5').update(input + result.toString()).digest('hex').startsWith(begin)) {
		success = true;
	} else {
		result++;
	}
}

console.log(result);