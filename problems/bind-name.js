'use strict';

function bindName(firstName, lastName, func) {
	return func.bind(null, (firstName + ' ' + lastName));
}

module.exports = bindName;
