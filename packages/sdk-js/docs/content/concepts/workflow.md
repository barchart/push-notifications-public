Both Android and iOS devices allow alerts to be displayed on-screen when the affected application is inactive. Common examples include:

* A car from a ride-hailing service is approaching.
* Your friend uses a messaging app to send you a picture.

In these cases, a remote event triggers the need to alert you. In other words, your device does not detect the event. Instead, your device is informed of the event, via a push notification. For example:

* The ride-sharing company detects your car is nearby and wants to notify you.
* The messaging company receives a photo for you and wants to notify you.

The Barchart Push Notification Service facilitates these types of notifications by:

* Maintaining a registry of mobile apps, the devices they installed on, and the users who are logged in.
* Accepting a request from one of your backend services to dispatch an alert notification.
* Locating the correct device(s) in the registry.
* Addressing request(s), on your behalf, to Apple's [APNs](https://en.wikipedia.org/wiki/Apple_Push_Notification_service) and/or Google's [FCM](https://en.wikipedia.org/wiki/Firebase_Cloud_Messaging).

Ultimately, Apple (or Google) is responsible for delivering the alert notification to the actual device.

## Registering for Notifications

Both iOS and Android applications have unique identifiers for:

* The mobile app, and
* The mobile app installation (on a specific device).

These identifiers need to be "registered" with the Barchart Notification Service. Then, at some point in the future, these identifiers can be used to address a push notification.

Some applications can be used anonymously (without a user logging in). Alternately, some applications allow (or require) the user to identify themselves. When a user is logged in, you should include their unique identifier in the registration data.

So, when do you perform the "registration" action?

* If you want to send push notifications anonymously — regardless of the actual user — you should "register" the app/device when the mobile app is installed.
* If you want to send push notifications to a specific user, you should "register" the app/device, including the user identifier, when the user authenticates.

Sometimes, a mobile device is used by multiple people. It's possible that one person will log out of your app and a new person will log in (on the same device). Registering a specific device with a different user identifier will overwrite the previous registration. However, the _cleanest_ approach would be to "unregister" the device when the existing user logs out and then "register" the device again when the new user logs in.

#### Using the SDK

Invoke the [PushNotificationGateway.registerDevice](/content/sdk/lib-gateway?id=pushnotificationgatewayregisterdevice) function to register a mobile app installation (and user). 

> Assign ```"ANONYMOUS"``` to the ```user.id``` property, if the app is being used anonymously. Otherwise, supply the user's identifier (e.g. their username).

#### Using the API

Send a ```POST``` request to the [```v2/register```](/content/api/paths?id=post-v2register) endpoint to register a mobile app installation (and user).

## Unregistering from Notifications

The "unregister" action deletes a record from the registry. It should be used when:

* A user logs out of the mobile app, or
* The mobile app is uninstalled from a device (if possible).

#### Using the SDK

Invoke the [PushNotificationGateway.unregisterDevice](/content/sdk/lib-gateway?id=pushnotificationgatewayunregisterdevice) function to delete a mobile app installation (and user).

#### Using the API

Send a ```DELETE``` request to the [```v2/register```](/content/api/paths?id=delete-v2register) endpoint to delete a mobile app installation (and user).

## Sending Notifications

After an alert notification is composed, it can be addressed to a single device or to multiple devices, using one of the three different methods:

| Target Name | Target Description                                             | Affected Devices | API Component                                                                      |
|-------------|----------------------------------------------------------------|------------------|------------------------------------------------------------------------------------|
| By Device   | A single app, installed on a single device.                    | zero or one      | [NotificationForDevice](/content/api/components?id=schemasnotificationfordevice)   |
| By User     | A single app, installed on all devices owned by a single user. | zero or few      | [NotificationForUser](/content/api/components?id=schemasnotificationforuser)       |
| By Bundle   | A single app, all known installations, regardless of user.     | many             | [NotificationnForBundle](/content/api/components?id=schemasnotificationnforbundle) |

> Push notifications should **never** be generated and sent from a mobile app. They should be generated and sent from a backend service. As a security precaution, signing secrets, different from those used to "register" and "unregister," are used for sending push notifications.

#### Using the SDK

The SDK does not currently supporting sending push notifications. It will in a future version.

#### Using the API

Send a ```POST``` request to the [```/v2/send```](/content/api/paths?id=post-v2send) endpoint.
