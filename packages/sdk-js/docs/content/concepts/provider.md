## Provider

Registration of each device requires the provision of a provider field. Provider defines a name for set of APNS and FCM keys for future push notifications. You must provide an APNS and FCM keys if you want to register your application for Barchart Push Notification Service. 

#### Apple Developer Teams

You must be a member of an Apple Developer Team. Furthermore, you must grant Barchart permission to send push notifications on your behalf of your organization.

Contact Barchart and provide the following information:

* Your APNs token signing key — in the form of a ```.p8``` file.
* Your ten character identifier for the aforementioned the signing key.
* Your ten character identifier for your Apple Developer Team.

Instructions for collecting this information can be found here:

* [Establishing a Token-Based Connection to APNs](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/establishing_a_token-based_connection_to_apns)

#### Google Firebase Cloud Messaging

You must grant Barchart permission to send push notifications on your behalf of your organization.

Contact Barchart and provide your Server Key Token. You can find it here: Project Overview -> Project Settings -> Cloud Messaging.