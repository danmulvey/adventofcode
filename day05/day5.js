// read the input values
var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split('\n');

/**
 * returns true if the string contains a minimum of 3 vowels (aeiou)
 * @param {String} input
 */
function hasVowels(input) {
	var regex = /[aeiou]+\w*[aeiou]+\w*[aeiou]+/;
	
	return regex.test(input);
}

/**
 * returns true if the string contains double letters (aa, bb, etc)
 * @param {String} input
 */
function hasDoubles(input) {
	var regex = /(\w)\1+/;
	
	return regex.test(input);
}

/**
 * returns true if the string contains one of the "bad" substrings (ab, cd, pq, xy)
 * @param {String} input
 */
function hasBadSubstring(input) {
	var badString = ['ab', 'cd', 'pq', 'xy'];
	
	for (var i = 0; i < badString.length; i++) {
		if (input.includes(badString[i])) {
			return true;
		}
	}
	
	return false;
}

/**
 * returns the number of "nice" strings
 * @param {Array} input
 */
function processList(input) {
	// store all of our "nice" strings
	var nice = [];
	
	for (var i = 0; i < input.length; i++) {
		if (hasVowels(input[i]) && hasDoubles(input[i]) && !hasBadSubstring(input[i])) {
			nice.push(input[i]);
		}
	}
	
	return nice.length;
}

console.log(processList(input));