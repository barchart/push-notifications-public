const PushNotificationGateway = require('./../../lib/gateway/PushNotificationGateway'),
	JwtProvider = require('./../../lib/security/JwtProvider');

console.info(`Example: Node.js example script started.`);

let pushNotificationGatewayGateway = null;

process.on('SIGINT', () => {
	console.info('Example: Processing SIGINT');

	if (pushNotificationGatewayGateway !== null) {
		pushNotificationGatewayGateway.dispose();
	}

	process.exit();
});

process.on('unhandledRejection', (error) => {
	console.error('Unhandled Promise Rejection', error);
});

process.on('uncaughtException', (error) => {
	console.error('Unhandled Error', error);
});

const user = {
	id: process.argv[2],
	context: 'barchart'
};

const deviceToken = '0000000000000000';
const iid = '0000000000';
const bundleId = 'com.barchart.pushNotificationGateway';

if (typeof (user.id) !== 'string' || user.id.length === 0) {
	console.error('A user identifier must be specified. Usage example: "node fcm.js user-123"');
	process.exit();
}

console.info(`Example: Initializing PushNotificationGateway, connecting to test environment as [ ${user.id} ] [ ${user.context} ].`);

PushNotificationGateway.forStaging(JwtProvider.forStaging(user.id, user.context))
	.then((gateway) => {
		pushNotificationGatewayGateway = gateway;

		console.info(`Example: Register device for [ ${user.id} ] [ ${user.context} ].`);

		const registerData = {
			user: user,
			fcm: {
				iid: iid,
				token: deviceToken,
				package: bundleId
			},
			provider: 'barchart.test.com'
		};

		return pushNotificationGatewayGateway.registerDevice(registerData)
			.then((registration) => {
				console.info(`Example: Created record for [ ${user.id} ] [ ${user.context} ].`);

				return registration;
			});
	}).then((registration) => {
		console.info(`Example: Unregister device for [ ${user.id} ] [ ${user.context} ].`);

		const unregisterData = {
			user: user,
			device: {
				device: iid,
				bundle: bundleId
			}
		};

		// Alternately, the "registration" object, resulting from the "registerDevice"
		// function can be passed to the "unregisterDevice" function.

		return pushNotificationGatewayGateway.unregisterDevice(unregisterData)
			.then((deleted) => {
				console.info(`Example: Deleted record for [ ${user.id} ] [ ${user.context} ] with message [ ${deleted.message} ].`);
			});
	}).then(() => {
		pushNotificationGatewayGateway.dispose();

		console.info(`Example: Node.js example script completed normally.`);
	});