'use strict';

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function getSmallestPrimeFactor(n) {
	if (n < 2) {
		return n;
	}

	if (n % 2 === 0) {
		return 2;
	}
	for (var i = 3; i <= Math.floor(n/2); i++) {
		if (n % i === 0 && isPrime(i)) {
			return i;
		}
	}
	return n;
}

function isPrime(n) {
	if (n < 2) {
		return false;
	}
	if (n === 2) {
		return true;
	} else if (n % 2 === 0) {
		return false;
	}
	var root = Math.floor(Math.sqrt(n));
	for (var i = 3; i <= root; i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}

function getLargestPrimeFactor(n) {
	var largestFactor = 1;
	var smallestFactor = getSmallestPrimeFactor(n);
	if (smallestFactor === n) {
		return n;
	}
	while (smallestFactor > largestFactor) {
		largestFactor = smallestFactor;
		n = n / smallestFactor;
		smallestFactor = getSmallestPrimeFactor(n);
	}
	return largestFactor;
}

// console.log(getLargestPrimeFactor(600851475143));

module.exports = getLargestPrimeFactor;
module.exports.isPrime = isPrime;
