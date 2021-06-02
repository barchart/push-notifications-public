/**
 * A meta namespace containing structural contracts of anonymous objects.
 *
 * @namespace Schema
 */

/**
 * A device information to register for push notifications
 *
 * @typedef Device
 * @type Object
 * @memberOf Schema
 * @property {Object} query - The query object
 * @property {Object} query.user - An object contains user data
 * @property {String} query.user.id - A user id
 * @property {String} query.user.context - A user context
 * @property {Object} [query.apns] - An object contains APNS data
 * @property {String} query.apns.device - Unique device token
 * @property {String} query.apns.bundle - An application bundle name
 * @property {Object} [query.fcm] - An object contains FCM data
 * @property {String} query.fcm.token - Unique device token
 * @property {String} query.fcm.package - An application package name
 * @property {String} query.fcm.iid - Firebase IID of device
 * @property {String} query.provider - Provider name
 */

 /**
 * An unregister device query.
 *
 * @typedef UnregisterQuery
 * @type Object
 * @memberOf Schema
 * @property {Object} query - The query object
 * @property {Object} query.user - An object contains user data
 * @property {String} query.user.id - A user id
 * @property {String} query.user.context - A user context
 * @property {Object} query.device - An object contains APNS or FCM data
 * @property {String} query.device.device - APNS device token or FCM IID
 * @property {String} query.device.bundle - Bundle or Package name of the application
 */