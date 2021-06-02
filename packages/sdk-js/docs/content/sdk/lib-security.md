## Contents {docsify-ignore}

* [JwtProvider](#JwtProvider) 

* [Callbacks](#Callbacks) 


* * *

## JwtProvider :id=jwtprovider
> Generates and caches a signed token (using a delegate). The cached token
> is refreshed periodically.

**Kind**: global class  
**Access**: public  
**Import**: @barchart/push-notifications-client-js/lib/security/JwtProvider  
**File**: /lib/security/JwtProvider.js  

* [JwtProvider](#JwtProvider)
    * _instance_
        * [.getToken()](#JwtProvidergetToken) ⇒ <code>Promise.&lt;String&gt;</code>
    * _static_
        * [.fromTokenGenerator(tokenGenerator, [refreshInterval])](#JwtProviderfromTokenGenerator) ⇒ [<code>JwtProvider</code>](#JwtProvider)
        * [.forStaging(userId, contextId)](#JwtProviderforStaging) ⇒ [<code>JwtProvider</code>](#JwtProvider)
    * _constructor_
        * [new JwtProvider(tokenGenerator, [refreshInterval])](#new_JwtProvider_new)


* * *

### jwtProvider.getToken() :id=jwtprovidergettoken
> Reads the current token, refreshing if necessary.

**Kind**: instance method of [<code>JwtProvider</code>](#JwtProvider)  
**Returns**: <code>Promise.&lt;String&gt;</code>  
**Access**: public  

* * *

### JwtProvider.fromTokenGenerator(tokenGenerator, [refreshInterval]) :id=jwtproviderfromtokengenerator
> A factory for [JwtProvider](/content/sdk/lib-security?id=jwtprovider) which is an alternative to the constructor.

**Kind**: static method of [<code>JwtProvider</code>](#JwtProvider)  
**Returns**: [<code>JwtProvider</code>](#JwtProvider)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| tokenGenerator | [<code>JwtTokenGenerator</code>](#CallbacksJwtTokenGenerator) | <p>An anonymous function which returns a signed JWT token.</p> |
| [refreshInterval] | <code>Number</code> | <p>The number of milliseconds which must pass before a new JWT token is generated. A zero value means the token should never be refreshed. A null or undefined value means the token is not cached.</p> |


* * *

### JwtProvider.forStaging(userId, contextId) :id=jwtproviderforstaging
> Builds a [JwtProvider](/content/sdk/lib-security?id=jwtprovider) which will generate tokens impersonating the specified
> user. The &quot;stage&quot; environment is for Barchart use only and access is restricted
> to Barchart's internal network.

**Kind**: static method of [<code>JwtProvider</code>](#JwtProvider)  
**Returns**: [<code>JwtProvider</code>](#JwtProvider)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>String</code> | <p>The user identifier to impersonate.</p> |
| contextId | <code>String</code> | <p>The context identifier of the user to impersonate.</p> |


* * *

### new JwtProvider(tokenGenerator, [refreshInterval]) :id=new_jwtprovider_new
**Kind**: constructor of [<code>JwtProvider</code>](#JwtProvider)  

| Param | Type | Description |
| --- | --- | --- |
| tokenGenerator | [<code>JwtTokenGenerator</code>](#CallbacksJwtTokenGenerator) | <p>An anonymous function which returns a signed JWT token.</p> |
| [refreshInterval] | <code>Number</code> | <p>The number of milliseconds which must pass before a new JWT token is generated. A zero value means the token should never be refreshed. A null or undefined value means the token is not cached.</p> |


* * *

## Callbacks :id=callbacks
> A meta namespace containing signatures of anonymous functions.

**Kind**: global namespace  

* * *

### Callbacks.JwtTokenGenerator :id=callbacksjwttokengenerator
> A function which returns a signed token.

**Kind**: static typedef of [<code>Callbacks</code>](#Callbacks)  
**Returns**: <code>String</code> \| <code>Promise.&lt;String&gt;</code>  
**Access**: public  

* * *

