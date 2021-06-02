## Setup

As a consumer of the Barchart ENS, you have two options:

1. Connect and communicate with the backend _by embedding this SDK in your software_, or
2. Connect and communicate with the backend _by direct interaction with the REST API_.

**If you choose to use the SDK**, you can install it from NPM (Node Package Manager), as follows:

```shell
npm install @barchart/push-notifications-client-js -S
```

**Otherwise, if you choose not to use the SDK**, please finish reviewing this page, then refer to
the [API Reference](/content/api_reference) section.

## Environments

Two instances of the Barchart ENS Service are always running:

#### Staging

The _staging_ environment can be used for integration and evaluation purposes. It can be accessed
at ```push-notifications-stage.aws.barchart.com``` and has two significant limitations:

* data saved in the _staging_ environment can be accessed by anyone.

#### Production

The _production_ environment does not permit anonymous connections. **Contact Barchart at solutions@barchart.com or (866) 333-7587 for assistance configuring your account.**

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

#### Using the SDK

Before you can do anything meaningful with the SDK, you must obtain an instance of the ```EnsGateway``` class. Use one
of the static factory functions and provide a strategy for generating JSON Web Tokens, as follows:

```js
const EnsGateway = require('@barchart/push-notifications-client-js/lib/gateway/EnsGateway'),
	JwtProvider = require('@barchart/push-notifications-client-js/lib/security/JwtProvider');

const myUserId = 'me';
const myContextId = 'barchart';

EnsGateway.forTest(JwtProvider.forStaging(myUserId, myContextId))
	.then((ensGateway) => {
		// ready ...
	});
```

#### Using the API

If you choose to work directly with the REST interface, you won't need to perform an explicit "connect" action. Each
HTTP request is independently authorized by the backend. You simply need to include a JWT token in the _Authorization_
header of each request.

## Constructing a Device object for register

First, we must construct an object which conforms to the [```Device```](content/sdk/lib-data?id=schemadevice) schema.
Here is a simple example:

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

#### Using the SDK

```js
const query = {
	user: {
		id: 'me',
		bundle: 'barchart'
	},
	apns: {
		device: '...',
		bundle: 'com.barchart.ens'
	},
	provider: 'barchart'
};

ensGateway.registerDevice(query)
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

## Unregister device

You can unregister your device, as follows:

#### Using the SDK

```js
const query = {
	user: {
		id: 'me',
		bundle: 'barchart'
	},
	device: {
		device: '...',
		bundle: 'com.barchart.ens'
	}
};

ensGateway.unregisterDevice(query)
	.then((response) => {
		console.log(`Unregistered`);
	});
```

#### Using the API

```shell
curl 'https://push-notifications-stage.aws.barchart.com/v2/unregister' \
  -X 'POST' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJtZSIsImNvbnRleHRJZCI6ImJhcmNoYXJ0IiwiaWF0IjoxNjIyNjQ3ODA4fQ.JWM85t7wmFeaWPon1-f-cGRY7cGn2H8B8VZDLaPOsXQ' \
  -H 'Content-Type: application/json;charset=UTF-8' \
  --data-binary '{ "user": "me","device": "...","bundle": "com.barchart.ens","context": "barchart"}'
```

## Sample Applications

One sample application was built with the SDK. Reviewing it may provide some insight into SDK features and usage.

### Node.js

A simple Node.js script connects to the _stage_ environment, register a device, and then unregister it.
Run the script from a command prompt, as follows:

```shell
npm install
node ./example/node/example.js {user_id}
```

