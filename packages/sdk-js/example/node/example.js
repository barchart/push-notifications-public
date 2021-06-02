const EnsGateway = require('./../../lib/gateway/EnsGateway'),
	JwtProvider = require('./../../lib/security/JwtProvider');

console.info(`Example: Node.js example script started.`);

let ensGateway = null;

process.on('SIGINT', () => {
	console.info('Example: Processing SIGINT');

	if (ensGateway !== null) {
		ensGateway.dispose();
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
const bundleId = 'com.barchart.ens';

if (typeof (user.id) !== 'string' || user.id.length === 0) {
	console.error('A user identifier must be specified. Usage example: "node example.js user-123"');
	process.exit();
}

console.info(`Example: Initializing EnsGateway, connecting to test environment as [ ${user.id} ] [ ${user.context} ].`);

EnsGateway.forStaging(JwtProvider.forStaging(user.id, user.context))
	.then((gateway) => {
		ensGateway = gateway;

		console.info(`Example: Register device for [ ${user.id} ] [ ${user.context} ].`);

		const registerQuery = {
			user: user,
			apns: {
				device: deviceToken,
				bundle: bundleId
			},
			provider: 'barchart'
		};

		return ensGateway.registerDevice(registerQuery)
			.then((device) => {
				console.info(`Example: Created record for [ ${user.id} ] [ ${user.context} ].`);
			});
	}).then(() => {
	console.info(`Example: Unregister device for [ ${user.id} ] [ ${user.context} ].`);

	const unregisterQuery = {
		user: user,
		device: {
			device: deviceToken,
			bundle: bundleId
		}
	};

	return ensGateway.unregisterDevice(unregisterQuery)
		.then((deleted) => {
			console.info(`Example: Deleted record for [ ${user.id} ] [ ${user.context} ] with message [ ${deleted.message} ].`);
		});
}).then(() => {
	ensGateway.dispose();

	console.info(`Example: Node.js example script completed normally.`);
});