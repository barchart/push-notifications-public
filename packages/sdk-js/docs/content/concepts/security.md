## Token Generation

#### Overview

Your system is responsible for authentication, for example:

* Perhaps users are identified by username and password.
* Perhaps users are identified using an SSO technology.
* Perhaps users are assumed to be valid because your software runs in a trusted environment.

**Since your system authenticated the user, it is responsible for token generation.**

Each interaction with the Barchart Push Notification Service will include a token. Barchart will _decode_ your token and _verify_ its authenticity (using a shared secret).

#### Token Payload

The token payload must include the following claims:

```json
{
	"contextId": "picked-by-barchart",
	"userId": "picked-by-you"
}
```

A **context** is a container for users. In other words, your "context" is your organization. You can imagine your "context" as follows:

```text
├── context
│   ├── user A
│   │   ├── device 1
│   │   ├── device 2
│   │   └── device 3
│   ├── user B
│   │   └── device 4
```

Your **context identifier** and **user identifiers** are always ```String``` values.

#### Token Signing Secrets

Each environment uses different algorithms and signing secrets.

**Test Environment:**

Since the _staging_ environment is intended for testing and evaluation purposes only, the secret is intentionally publicized (see below). Data saved in the _staging_ environment can be viewed and manipulated by anyone. Do not store sensitive data in the _staging_ environment.

* Hostname:```push-notifications-stage.aws.barchart.com```
* Port: ```443```
* Algorithm: ```HMAC-SHA256``` (aka ```HS256```)
* Secret: ```"public-knowledge-1234567890"```

**Production Environment:**

When you're ready to move to production, you'll need to generate a [public/private key pair](https://en.wikipedia.org/wiki/Public-key_cryptography) (see below).

* Hostname:```push-notifications.aws.barchart.com```
* Port: ```443```
* Algorithm: Agreed upon when your account is configured
* Secret: Agreed upon when your account is configured

**Contact us at solutions@barchart.com or (866) 333-7587 for assistance configuring your account.**

#### Token Signing Example

Token signing should be done such that:

* The signing secret (e.g. private key or secret string) is not exposed.
* The signing system should be trusted to keep time correctly.
* The cryptography uses battle-tested code. This means you'll probably want to find a third-party library to help.

Here is an example written for Node.js using the [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme) library.

```js
const jwt = require('jsonwebtoken');

const claims = {
	userId: 'me',
	contextId: 'barchart'
};

const secret = 'public-knowledge-1234567890';
const token = jwt.sign(claims, secret, { algorithm: 'HS256', expiresIn: '2 days' });
```

## Token Usage

### Using the SDK

First, write a function that signs and returns a token. The function must conform to the [```Schema.JwtTokenGenerator```](/content/sdk/lib-security?id=callbacksjwttokengenerator) contract — which accepts no arguments and returns a ```String``` (synchronously or asynchronously). For example:

```js
function getJwtToken() {
	return Promise.resolve()
		.then(() => {
			// Generate a signed token and return it. You'll probably want to delegate
			// the actual work to a remote service. This helps to ensure your JWT signing
			// secret cannot be compromised.

			return token;
		});
}
```

Next, instantiate a [```JwtProvider```](/content/sdk/lib-security?id=jwtprovider) and pass it to one of the environment-specific factory function:

* ```EnsGateway.forStaging```

For example:

```js
const jwtProvider = new JwtProvider(getJwtToken);

EnsGateway.forStaging(jwtProvider)
	.then((ensGateway) => {
		// Ready to use ...
	});
```

### Using the API

Each HTTP request must include a token. After you generate the token, add it to the ```Authorization``` header of your HTTP request. For example, here is the cURL command to register a device:

```shell
curl 'https://push-notifications-stage.aws.barchart.com/v2/register' \
  -X 'POST' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJtZSIsImNvbnRleHRJZCI6ImJhcmNoYXJ0IiwiaWF0IjoxNjIyNjQ3ODA4fQ.JWM85t7wmFeaWPon1-f-cGRY7cGn2H8B8VZDLaPOsXQ' \
  -H 'Content-Type: application/json;charset=UTF-8' \
  --data-binary '{"user":{"id": "me","context":"barchart"},"apns": {"device": "...","bundle":"com.barchart.ens"},"provider":"barchart"}'
```
If we decode the token — try [this tool](https://jwt.io/) — you'll see the token payload refers to ```me@barchart```:

```json
{
	"userId": "me",
	"contextId": "barchart",
	"iat": 1622647808
}
```

When using this token, we can only interact with devices owned by ```me@barchart```.

## Best Practices

Under no circumstances should your JWT secret be accessible to anyone outside of your organization. If someone obtains your signing secret, they could interact with the Barchart Push Notification Service on your behalf.

If you are developing a web application, you should not generate tokens inside the web browser. A clever user could read your JWT secret (from the web browser) and use it to impersonate other users.

Your secret should be protected. Tokens should only be generated by a trusted backend.

