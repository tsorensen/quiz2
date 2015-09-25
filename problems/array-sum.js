'use strict';

function arraySum(arr) {
	var sum;
	if(arr.length > 0) {
		sum = arr.reduce(function(a, b) {
			if(b instanceof Array) {
				return a.concat(arraySum(b))
			} else {
				return a.concat(b);
			}
		}, []).reduce(function(a, b){
			return a + b;
		});
	} else {
		sum = 0;
	}
	
	return sum;
}

module.exports = arraySum;
