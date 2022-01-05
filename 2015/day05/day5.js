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
 * returns true if the string contains a pair of letters that repeats
 * with no overlap (xyxy but not aaa)
 * @param {String} input
 */
function hasDoubleNoOverlap(input) {
	var regex = /(..).*\1/;
	
	return regex.test(input);
}

/**
 * returns true if the string contains at least one letter that repeats
 * with exactly one letter in between them (xyx, aefeh, aaa)
 * @param {String} input
 */
function hasRepeatBetween(input) {
	var regex = /(.).\1/;
	
	return regex.test(input);
}

/**
 * prints the number of "nice" strings
 * @param {Array} input
 */
function processList(input) {
	// store all of our "nice" strings
	var nicePart1 = [];
	var nicePart2 = [];
	
	for (var i = 0; i < input.length; i++) {
		// check if the string is nice using part 1 rules
		if (hasVowels(input[i]) && hasDoubles(input[i]) && !hasBadSubstring(input[i])) {
			nicePart1.push(input[i]);
		}
		// check if the string is nice using part 2 rules
		if (hasDoubleNoOverlap(input[i]) && hasRepeatBetween(input[i])) {
			nicePart2.push(input[i]);
		}
	}
	
	console.log("Nice strings for part 1: " + nicePart1.length);
	console.log("Nice strings for part 2: " + nicePart2.length);
}

// process the list!
processList(input);