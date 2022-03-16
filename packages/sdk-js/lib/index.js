const PushNotificationGateway = require('./gateway/PushNotificationGateway');

module.exports = (() => {
	'use strict';

	return {
		PushNotificationGateway: PushNotificationGateway,
		version: '1.0.4'
	};
})();
