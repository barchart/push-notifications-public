**This SDK provides a convenient way to interact with the _Barchart Push Notification Service._**

You can easily write code that allows your applications to:

* Register a mobile app for push notification delivery.
* Unregister a mobile app from push notification delivery.

Also, your applications can send push notifications, targeting:

* A specific device with your app installed.
* All registered devices with your app installed.
* All registered devices where a specific user has logged into your app.

## Supported Devices

Both **Android** and **iOS** devices are supported. Depending on the type of device, the _final leg_ of delivery for a push notification message will be handled by either:

* Apple's Apple Push Notification Service (APNs), or
* Google's Firebase Cloud Messaging (FCM).

## Supported Environments

This SDK is written in JavaScript. This SDK can be embedded in mobile application which supports JavaScript (usually for the purpose of "registering" and "unregistering"). Alternately, this SDK could be used in a Node.js application (usually for the purpose to sending push notifications).

#### Direct Access

The Barchart Push Notification Service implements a REST interface via HTTP. So, you may choose to interact with the remote service directly, bypassing this SDK entirely. An [OpenAPI](https://www.openapis.org/) specification of the interface can be found in the [API Reference](/content/api_reference) section.

#### Other

If JavaScript isn't suitable for your environment, and you're not interested in direct access, please contact us at solutions@barchart.com or (866) 333-7587. We can accommodate most major programming languages.
