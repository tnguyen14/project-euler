'use strict';

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

let largestPrimeFactor = require('./3.largest-prime-factor');

function smallestMultiple(from, to) {
	let min = from;
	let max = to;
	if (from > to) {
		min = to;
		max = from;
	}
	let multiple = max;

	for (var i = max; i >= min; i--) {
		let num = i;
		while (multiple % i !== 0) {
			let largestFactor = 1;
			num = num / largestFactor;
			largestFactor = largestPrimeFactor(num);
			multiple = multiple * largestFactor;
		}
	}
	return multiple;
}

// console.log(smallestMultiple(1, 20));

module.exports = smallestMultiple;

