const EnsGateway = require('./gateway/EnsGateway');

module.exports = (() => {
	'use strict';

	return {
		EnsGateway: EnsGateway,
		version: '1.0.0'
	};
})();
