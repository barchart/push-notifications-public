## Setup

As a consumer of the Barchart Push Notification Service, you have two options:

1. Connect and communicate with the backend _by embedding this SDK in your software_, or
2. Connect and communicate with the backend _by direct interaction with the REST API_.

**If you choose to use the SDK**, you can install it from NPM (Node Package Manager), as follows:

```shell
npm install @barchart/push-notifications-client-js -S
```

**Otherwise, if you choose not to use the SDK**, please finish reviewing this page, then refer to
the [API Reference](/content/api_reference) section.

## Environments

Two instances of the Barchart Push Notification Service are always running:

### Staging

The _staging_ environment can be used for integration and evaluation purposes. It can be accessed
at ```https://push-notifications-stage.aws.barchart.com```.

### Production

The _production_ environment does not permit anonymous connections. **Contact Barchart at solutions@barchart.com or (866) 333-7587 for assistance configuring your account.** 

It can be accessed at ```https://push-notifications.aws.barchart.com```.

## Authorization

[JSON Web Tokens](https://en.wikipedia.org/wiki/JSON_Web_Token) — called JWT — are used for authorization. Each request
made to the backend must include a token. Generating these tokens is surprisingly easy — refer to
the [Key Concepts: Security](/content/concepts/security) section for details.

In the _staging_ environment, token generation uses these parameters:

* Tokens are signed with the ```HMAC-SHA256``` (aka ```HS256```) algorithm
* Tokens are signed with the following secret: ```"public-knowledge-1234567890"```

The _staging_ environment is intended for evaluation and testing purposes. Since the signing secret has been
publicized (above), there can be no expectation of privacy. Consequently, no sensitive information should be saved in
the _staging_ environment.

The _production_ environment is secure. You will generate
a [public/private key pair](https://en.wikipedia.org/wiki/Public-key_cryptography) and provide the public certificate to
Barchart. As long as you maintain control over your private certificate, your data will be protected.

Regardless of environment, the token payload must include two claims:

* ```userId``` is the unique identifier of the current user
* ```contextId``` is a unique identifier for your organization

## Connecting

### Using the SDK

Before you can do anything meaningful with the SDK, you must obtain an instance of the ```PushNotificationGateway``` class. Use one
of the static factory functions and provide a strategy for generating JSON Web Tokens, as follows:

```js
const PushNotificationGateway = require('@barchart/push-notifications-client-js/lib/gateway/PushNotificationGateway'),
	JwtProvider = require('@barchart/push-notifications-client-js/lib/security/JwtProvider');

const myUserId = 'me';
const myContextId = 'barchart';

PushNotificationGateway.forStaging(JwtProvider.forStaging(myUserId, myContextId))
	.then((pushNotificationGateway) => {
		// ready ...
	});
```

### Using the API

If you choose to work directly with the REST interface, you won't need to perform an explicit "connect" action. Each
HTTP request is independently authorized by the backend. You simply need to include a JWT token in the _Authorization_
header of each request.

## Register a Device

First, we must construct an object which conforms to the [```Device```](content/sdk/lib-data?id=schemadevice) schema.

Here is a simple example for an iOS device. For an Android device, remove the `apns` property and add an `fcm` property.

```json
{
	"user": {
		"id": "me",
		"context": "barchart"
	},
	"apns": {
		"device": "...",
		"bundle": "com.barchart.ens"
	},
	"provider": "barchart"
}
```

The `provider` property refers to name for your APNs or FCM keys. Read [Key Concepts: Providers](/content/concepts/providers) section for details. 

### Example for APNs

#### Using the SDK

```js
const registrationData = {
	user: {
		id: 'me',
		context: 'barchart'
	},
	apns: {
		device: '...',
		bundle: 'com.barchart.ens'
	},
	provider: 'barchart'
};

pushNotificationGatweay.registerDevice(registrationData)
	.then((created) => {
		console.log(`Device registered`);
	});
```

#### Using the API

```shell
curl 'https://push-notifications-stage.aws.barchart.com/v2/register' \
  -X 'POST' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJtZSIsImNvbnRleHRJZCI6ImJhcmNoYXJ0IiwiaWF0IjoxNjIyNjQ3ODA4fQ.JWM85t7wmFeaWPon1-f-cGRY7cGn2H8B8VZDLaPOsXQ' \
  -H 'Content-Type: application/json;charset=UTF-8' \
  --data-binary '{"user":{"id": "me","context":"barchart"},"apns": {"device": "...","bundle":"com.barchart.ens"},"provider":"barchart"}'
```

#### Example Output

The result will be a complete ```Device``` object, similar to the example below.

```json
{
	"user": {
		"id": "me",
		"context": "barchart"
	},
	"apns": {
		"device": "00000000000000000000000000000000000000000000000000000000000000",
		"bundle": "com.barchart.ens"
	},
	"provider": "barchart"
}
```

### Example for FCM

```js
const registrationData = {
	user: {
		id: 'me',
		context: 'barchart'
	},
	fcm: {
		iid: '...',
        token: '...',
		package: 'com.barchart.ens'
	},
	provider: 'barchart.test.com'
};

PushNotificationGateway.registerDevice(registrationData)
	.then((created) => {
		console.log(`Device registered`);
	});
```

#### Using the API

```shell
curl 'https://push-notifications-stage.aws.barchart.com/v2/register' \
  -X 'POST' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJtZSIsImNvbnRleHRJZCI6ImJhcmNoYXJ0IiwiaWF0IjoxNjIyNjQ3ODA4fQ.JWM85t7wmFeaWPon1-f-cGRY7cGn2H8B8VZDLaPOsXQ' \
  -H 'Content-Type: application/json;charset=UTF-8' \
  --data-binary '{"user":{"id": "me","context":"barchart"},"fcm": {"iid": "...","token":"...","bundle":"com.barchart.ens"},"provider":"barchart.test.com"}'
```

#### Example Output

The result will be a complete ```Device``` object, similar to the example below.

```json
{
	"user": {
		"id": "me",
		"context": "barchart"
	},
	"fcm": {
		"iid": "...",
		"token": "...",
		"package": "com.barchart.ens"
	},
	"provider": "barchart.test.com"
}
```

## Unregister a Device

You can unregister your device, as follows:

#### Using the SDK

```js
const registrationData = {
	user: {
		id: 'me',
		context: 'barchart'
	},
	device: {
		device: '...',
		bundle: 'com.barchart.ens'
	}
};

PushNotificationGateway.unregisterDevice(registrationData)
	.then((response) => {
		console.log(`Unregistered`);
	});
```

> `device.device` field should contain data from `apns.device` field for APNs devices, and `fcm.iid` for FCM devices.

#### Using the API

```shell
curl 'https://push-notifications-stage.aws.barchart.com/v2/unregister' \
  -X 'POST' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJtZSIsImNvbnRleHRJZCI6ImJhcmNoYXJ0IiwiaWF0IjoxNjIyNjQ3ODA4fQ.JWM85t7wmFeaWPon1-f-cGRY7cGn2H8B8VZDLaPOsXQ' \
  -H 'Content-Type: application/json;charset=UTF-8' \
  --data-binary '{ "user": "me","device": "...","bundle": "com.barchart.ens","context": "barchart"}'
```

## Send a Push Notification

The SDK does not support sending push notifications. Please use the API [directly](/content/api_reference).

## Sample Scripts

Two sample scripts were built with the SDK. Reviewing it may provide some insight into SDK features and usage.

### Node.js

Simple Node.js scripts connects to the _stage_ environment, register a device, and then unregister it.

Assuming you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Node.js](https://nodejs.org/en/download/) installed, run the following:

```shell
git clone git@github.com:barchart/push-notifications-public-js.git
cd push-notifications-public-js
npm install
cd packages/sdk-js/example/node
```

Then, execute the scripts (one for APNs and another for FCM) as follows:

```shell
node apns.js {user_id}
node fcm.js {user_id}
```
