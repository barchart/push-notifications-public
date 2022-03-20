**This SDK provides a convenient way to interact with the _Barchart Push Notification Service._**

You can easily write code that allows your applications to:

* Register a mobile app for push notification delivery.
* Unregister a mobile app from push notification delivery.

Also, your applications can send push notifications, targeting:

* An app running on a known device.
* An app running on all known devices.
* An app running on all known devices that are owned by a single user.

## Supported Devices

Both **Android** and **iOS** devices are supported. Ultimately, the final leg of delivery to mobile devices is handled by (a) Apple's APNs (Apple Push Notification Service) or (b) Google's FCM (Firebase Cloud Messaging).

## Supported Environments

This SDK is written in JavaScript. This SDK can be embedded in mobile application which supports JavaScript (usually for the purpose of "registering" and "unregistering"). Alternately, this SDK could be used in a Node.js application (usually for the purpose to sending push notifications).

#### Direct Access

The Barchart Push Notification Service implements a REST interface via HTTP. So, you may choose to interact with the remote service directly, bypassing this SDK entirely. An [OpenAPI](https://www.openapis.org/) specification of the interface can be found in the [API Reference](/content/api_reference) section.

#### Other

If JavaScript isn't suitable for your environment, and you're not interested in direct access, please contact us at solutions@barchart.com or (866) 333-7587. We can accommodate most major programming languages.
