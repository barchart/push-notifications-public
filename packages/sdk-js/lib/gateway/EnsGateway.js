const assert = require('@barchart/common-js/lang/assert'),
	Disposable = require('@barchart/common-js/lang/Disposable'),
	Enum = require('@barchart/common-js/lang/Enum');

const EndpointBuilder = require('@barchart/common-js/api/http/builders/EndpointBuilder'),
	Gateway = require('@barchart/common-js/api/http/Gateway'),
	ProtocolType = require('@barchart/common-js/api/http/definitions/ProtocolType'),
	ErrorInterceptor = require('@barchart/common-js/api/http/interceptors/ErrorInterceptor'),
	FailureReason = require('@barchart/common-js/api/failures/FailureReason'),
	FailureType = require('@barchart/common-js/api/failures/FailureType'),
	RequestInterceptor = require('@barchart/common-js/api/http/interceptors/RequestInterceptor'),
	ResponseInterceptor = require('@barchart/common-js/api/http/interceptors/ResponseInterceptor'),
	VerbType = require('@barchart/common-js/api/http/definitions/VerbType');

const Configuration = require('./../common/Configuration'),
	JwtProvider = require('../security/JwtProvider');

module.exports = (() => {
	'use strict';

	const REST_API_SECURE_PROTOCOL = 'https';
	const REST_API_SECURE_PORT = 443;

	/**
	 * The **central component of the SDK**. It is responsible for connecting to Barchart's
	 * ENS. It can be used to register and unregister devices.
	 *
	 * @public
	 * @exported
	 * @param {String} protocol - The protocol of the of the ENS web service (either http or https).
	 * @param {String} host - The hostname of the ENS web service.
	 * @param {Number} port - The TCP port number of the ENS web service.
	 * @param {String} environment - A description of the environment we're connecting to.
	 * @extends {Disposable}
	 */
	class EnsGateway extends Disposable {
		constructor(protocol, host, port, environment) {
			super();

			this._environment = environment;

			this._jwtProvider = null;

			this._started = false;
			this._startPromise = null;

			const requestInterceptor = RequestInterceptor.fromDelegate((options, endpoint) => {
				return Promise.resolve()
					.then(() => {
						return this._jwtProvider.getToken()
							.then((token) => {
								options.headers = options.headers || {};
								options.headers.Authorization = `Bearer ${token}`;

								return options;
							});
					}).catch((e) => {
						const failure = FailureReason.forRequest({ endpoint: endpoint })
							.addItem(FailureType.REQUEST_IDENTITY_FAILURE)
							.format();

						return Promise.reject(failure);
					});
			});

			const responseInterceptor = ResponseInterceptor.fromDelegate((response, ignored) => {
				return response.data;
			});

			const protocolType = Enum.fromCode(ProtocolType, protocol.toUpperCase());

			this._registerEndpoint = EndpointBuilder.for('register-device', 'register your device')
				.withVerb(VerbType.POST)
				.withProtocol(protocolType)
				.withHost(host)
				.withPort(port)
				.withPathBuilder((pb) =>
					pb.withLiteralParameter('version', 'v2')
						.withLiteralParameter('register', 'register')
				)
				.withBody()
				.withRequestInterceptor(requestInterceptor)
				.withResponseInterceptor(responseInterceptor)
				.withErrorInterceptor(ErrorInterceptor.GENERAL)
				.endpoint;

			this._unregisterEndpoint = EndpointBuilder.for('unregister-device', 'unregister your device')
				.withVerb(VerbType.POST)
				.withProtocol(protocolType)
				.withHost(host)
				.withPort(port)
				.withPathBuilder((pb) =>
					pb.withLiteralParameter('version', 'v2')
						.withLiteralParameter('unregister', 'unregister')
				)
				.withBody()
				.withRequestInterceptor(requestInterceptor)
				.withResponseInterceptor(responseInterceptor)
				.withErrorInterceptor(ErrorInterceptor.GENERAL)
				.endpoint;
		}

		/**
		 * A description of the environment (e.g. development, production, etc).
		 *
		 * @public
		 * @return {String}
		 */
		get environment() {
			return this._environment;
		}

		/**
		 * Attempts to establish a connection to the backend. This function should be invoked
		 * immediately following instantiation. Once the resulting promise resolves, a
		 * connection has been established and other instance methods can be used.
		 *
		 * @public
		 * @param {JwtProvider} jwtProvider
		 * @returns {Promise<EnsGateway>}
		 */
		connect(jwtProvider) {
			return Promise.resolve()
				.then(() => {
					assert.argumentIsRequired(jwtProvider, 'jwtProvider', JwtProvider, 'JwtProvider');

					if (this._startPromise === null) {
						this._startPromise = Promise.resolve()
							.then(() => {
								this._started = true;

								this._jwtProvider = jwtProvider;

								return this;
							}).catch((e) => {
								this._started = false;
								this._startPromise = null;

								this._jwtProvider = null;

								throw e;
							});
					}

					return this._startPromise;
				});
		}

		/**
		 * Registers iOS or Android device to receive push notifications.
		 *
		 * @public
		 * @param {Schema.Device} query - User information for registering device to receive push notifications.
		 * @returns {Promise<Schema.Device>}
		 */
		registerDevice(query) {
			return Promise.resolve()
				.then(() => {
					checkStart.call(this);

					assert.argumentIsRequired(query, 'query', Object);
					assert.argumentIsRequired(query.user, 'query.user', Object);
					assert.argumentIsRequired(query.user.id, 'query.user.id', String);
					assert.argumentIsRequired(query.user.context, 'query.user.context', String);
					assert.argumentIsRequired(query.provider, 'query.provider', String);

					if (!query.apns && !query.fcm) {
						throw new Error('One of the arguments [ query.apns, query.fcm ] must be provided');
					}

					if (query.apns) {
						assert.argumentIsRequired(query.apns, 'query.apns', Object);
						assert.argumentIsRequired(query.apns.device, 'query.apns.device', String);
						assert.argumentIsRequired(query.apns.bundle, 'query.apns.bundle', String);
					}

					if (query.fcm) {
						assert.argumentIsRequired(query.fcm, 'query.fcm', Object);
						assert.argumentIsRequired(query.fcm.iid, 'query.fcm.iid', String);
						assert.argumentIsRequired(query.fcm.package, 'query.fcm.package', String);
						assert.argumentIsRequired(query.fcm.token, 'query.fcm.token', String);
					}

					return Gateway.invoke(this._registerEndpoint, query);
				});
		}

		/**
		 * Unregisters iOS or Android device.
		 *
		 * @public
		 * @param {Schema.UnregisterQuery} query - User information for unregistering the device to receive push notifications.
		 * @returns {Promise<Object>}
		 */
		unregisterDevice(query) {
			return Promise.resolve()
				.then(() => {
					checkStart.call(this);

					assert.argumentIsRequired(query, 'query', Object);
					assert.argumentIsRequired(query.user, 'query.user', Object);
					assert.argumentIsRequired(query.user.id, 'query.user.id', String);
					assert.argumentIsRequired(query.user.context, 'query.user.context', String);
					assert.argumentIsRequired(query.device, 'query.device', Object);
					assert.argumentIsRequired(query.device.device, 'query.device.device', String);
					assert.argumentIsRequired(query.device.bundle, 'query.device.bundle', String);

					return Gateway.invoke(this._unregisterEndpoint, {
						user: query.user.id,
						context: query.user.context,
						device: query.device.device,
						bundle: query.device.bundle
					});
				});
		}

		/**
		 * Creates and starts a new {@link EnsGateway} for use in the private staging environment.
		 *
		 * @public
		 * @static
		 * @param {JwtProvider} jwtProvider
		 * @returns {Promise<EnsGateway>}
		 */
		static forStaging(jwtProvider) {
			return Promise.resolve()
				.then(() => {
					assert.argumentIsRequired(jwtProvider, 'jwtProvider', JwtProvider, 'JwtProvider');

					return start(new EnsGateway(REST_API_SECURE_PROTOCOL, Configuration.stagingHost, REST_API_SECURE_PORT, 'staging'), jwtProvider);
				});
		}

		/**
		 * Creates and starts a new {@link EnsGateway} for use in the public production environment.
		 *
		 * @public
		 * @static
		 * @param {JwtProvider} jwtProvider
		 * @returns {Promise<EnsGateway>}
		 */
		static forProduction(jwtProvider) {
			return Promise.resolve()
				.then(() => {
					assert.argumentIsRequired(jwtProvider, 'jwtProvider', JwtProvider, 'JwtProvider');

					return start(new EnsGateway(REST_API_SECURE_PROTOCOL, Configuration.productionHost, REST_API_SECURE_PORT, 'production'), jwtProvider);
				});
		}

		_onDispose() {
		}

		toString() {
			return '[EnsGateway]';
		}
	}

	function start(gateway, jwtProvider) {
		return gateway.connect(jwtProvider)
			.then(() => {
				return gateway;
			});
	}

	function checkStart() {
		if (this.getIsDisposed()) {
			throw new Error('Unable to use gateway, the gateway has been disposed.');
		}

		if (!this._started) {
			throw new Error('Unable to use gateway, the gateway has not started.');
		}
	}

	return EnsGateway;
})();
