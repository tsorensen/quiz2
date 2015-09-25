'use strict';

function longestString(arr) {
	var longest = arr.filter(function(index) {
		return typeof index === 'string';
	}).reduce(function(a, b) {
		return a.length > b.length ? a : b;
	});

	return longest;
}

module.exports = longestString;
