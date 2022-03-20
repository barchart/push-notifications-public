The Barchart Push Notification Service dispatches push notification messages to APNs and/or FCM on your behalf. To delegate this authority to Barchart, you must provide Barchart with your "keys" for these services (see below).

## Apple Developer Teams

You must be a member of an Apple Developer Team used to develop the mobile app. Contact Barchart and provide the following information:

* Your APNs token signing key — in the form of a ```.p8``` file.
* Your ten character identifier for the aforementioned the signing key.
* Your ten character identifier for your Apple Developer Team.

Instructions for collecting this information can be found here:

* [Establishing a Token-Based Connection to APNs](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/establishing_a_token-based_connection_to_apns)

## Google Firebase Cloud Messaging

Contact Barchart and provide your Server Key Token. You can find it here: Project Overview -> Project Settings -> Cloud Messaging.

## Provider Names

Once you have provided the aforementioned "keys" to Barchart, a `provider` name will be assigned to you. The provider name refers to your APNs keys and FCM keys.

This name must be assigned to the `provider` attribute when registering a device. See the following schemas:

* [```ApnsRegistration```](/content/sdk/lib-data?id=schemaapnsregistration) schema, or the
* [```FcmRegistration```](/content/sdk/lib-data?id=schemafcmregistration) schema.
