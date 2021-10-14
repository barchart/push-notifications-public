const PushNotificationGateway = require('./gateway/PushNotificationGateway');

module.exports = (() => {
	'use strict';

	return {
		PushNotificationGateway: PushNotificationGateway,
		version: '0.0.0'
	};
})();
