**This SDK provides an API to interact to the _Barchart ENS_ — a simple tool for push notifications.**

You can _quickly_ build an application that allows your users to:

* Register a device to receive push notifications
* Unregister the device to stop receiving push notifications

## Supported Environments

This SDK provides a convenient way to interact with the Barchart ENS. We recommend using it in JavaScript environments.

#### Node.js

This SDK is compatible with Node.js.

#### Direct Access

The Barchart ENS implements a REST interface via HTTP. You may choose to interact with the remote service directly, bypassing this SDK entirely. An [OpenAPI](https://www.openapis.org/) specification of the interface can be found in the [API Reference](/content/api_reference) section.

#### Other

If JavaScript isn't suitable for your environment and you're not interested in direct access, please contact us at solutions@barchart.com or (866) 333-7587.

## User Privacy

Privacy is important to Barchart and we do not wish to transmit or collect personally identifiable information about your users. We encourage users of the ENS to avoid sharing identifying information.

Here's how:

* You **must** provide Barchart with unique user identifiers. However, these identifiers can be **meaningless** — other than to differentiate one user from another. [Universally Unique Identifiers](https://en.wikipedia.org/wiki/Universally_unique_identifier) are commonly used for this purpose.

* Each request to Barchart is authorized using JWT technology. You generate "tokens" and the Barchart verifies their authenticity. The tokens provide security; however they do not contain any sensitive information (e.g. passwords). You can read more about this in the [Key Concepts: Security](/content/concepts/security) section of the documentation.
