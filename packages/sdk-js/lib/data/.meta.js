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
 * @property {Object} device
 * @property {Object} device.user - An object contains user data
 * @property {String} device.user.id - A user id
 * @property {String} device.user.context - A user context
 * @property {Object} [device.apns] - An object contains APNs data
 * @property {String} device.apns.device - Unique device token
 * @property {String} device.apns.bundle - An application bundle name
 * @property {Object} [device.fcm] - An object contains FCM data
 * @property {String} device.fcm.token - Unique device token
 * @property {String} device.fcm.package - An application package name
 * @property {String} device.fcm.iid - Firebase IID of device
 * @property {String} device.provider - Provider name
 */

 /**
 * Data structure used to unregister a device.
 *
 * @typedef UnregisterRequest
 * @type Object
 * @memberOf Schema
 * @property {Object} request
 * @property {Object} request.user - An object contains user data
 * @property {String} request.user.id - A user id
 * @property {String} request.user.context - A user context
 * @property {Object} request.device - An object contains APNs or FCM data
 * @property {String} request.device.device - APNs device token or FCM IID
 * @property {String} request.device.bundle - Bundle or Package name of the application
 */