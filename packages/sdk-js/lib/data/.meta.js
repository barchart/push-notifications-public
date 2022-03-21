/**
 * A meta namespace containing structural contracts of anonymous objects.
 *
 * @namespace Schema
 */

/**
 * Information that uniquely identifies a user.
 *
 * @typedef User
 * @type Object
 * @memberOf Schema
 * @property {String} id - The unique identifier for the user (within the context). Use "ANONYMOUS" when user is unknown.
 * @property {String} context - A value assigned to you by Barchart, (e.g. application or customer name).
 */

/**
 * Information regarding an iOS device (used to communicate with APNs).
 *
 * @typedef ApnsDevice
 * @type Object
 * @memberOf Schema
 * @property {String} device - The unique identifier for the iOS device (obtained from an instance of the app, installed on an actual device).
 * @property {String} bundle - The bundle name of a mobile application registered with APNs (used to identify the app, the same value across all devices).
 */

/**
 * Information regarding an Android device (used to communicate with FCM).
 *
 * @typedef FcmDevice
 * @type Object
 * @memberOf Schema
 * @property {String=} iid - The Firebase IID (FCM deprecated this field, can be omitted).
 * @property {String} token - The Firebase device token (obtained from an instance of the app, installed on an actual device).
 * @property {String} package - The package name of a mobile application registered with FCM (used to identify the app, the same value across all devices).
 */

/**
 * Information a mobile app installation on a specific iOS device.
 *
 * @typedef ApnsRegistration
 * @type Object
 * @memberOf Schema
 * @property {Schema.User} user - The user of the mobile app.
 * @property {Schema.ApnsDevice} apns - Data regarding the app, installed on a specific device.
 * @property {String} provider - A value assigned to you by Barchart, used to identify keys for communication with APNs. Typically the same as the user's context.
 */

/**
 * Information a mobile app installation on a specific Android device.
 *
 * @typedef FcmRegistration
 * @type Object
 * @memberOf Schema
 * @property {Schema.User} user - The user of the mobile app.
 * @property {Schema.FcmDevice} fcm - Data regarding the app, installed on a specific device.
 * @property {String} provider - A value assigned to you by Barchart, used to identify keys for communication with APNs. Typically the same as the user's context.
 */

 /**
 * Data used identify a "registration" for deletion.
 *
 * @typedef UnregisterRequest
 * @type Object
 * @memberOf Schema
 * @property {Object} request
 * @property {Schema.User} user - The user of the mobile app.
 * @property {Object} request.device - Identifiers for the mobile app installation (on a specific device).
 * @property {String} request.device.device - The device token (for APNs) or an IID (for FCM).
 * @property {String} request.device.bundle - The bundle name (APNs) or the package name (FCM).
 */