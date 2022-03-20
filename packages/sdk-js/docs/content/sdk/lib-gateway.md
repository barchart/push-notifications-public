## PushNotificationGateway :id=pushnotificationgateway
> The <strong>central component of the SDK</strong>. It is responsible for connecting to Barchart's
> Push Notification Service. It can be used to register and unregister devices.

**Kind**: global class  
**Extends**: <code>Disposable</code>  
**Access**: public  
**Import**: @barchart/push-notifications-client-js/lib/gateway/PushNotificationGateway  
**File**: /lib/gateway/PushNotificationGateway.js  

* [PushNotificationGateway](#PushNotificationGateway) ⇐ <code>Disposable</code>
    * _instance_
        * [.environment](#PushNotificationGatewayenvironment) ⇒ <code>String</code>
        * [.connect(jwtProvider)](#PushNotificationGatewayconnect) ⇒ [<code>Promise.&lt;PushNotificationGateway&gt;</code>](#PushNotificationGateway)
        * [.registerDevice(registration)](#PushNotificationGatewayregisterDevice) ⇒ <code>Promise.&lt;(Schema.ApnsRegistration\|Schema.FcmRegistration)&gt;</code>
        * [.unregisterDevice(data)](#PushNotificationGatewayunregisterDevice) ⇒ <code>Promise.&lt;Object&gt;</code>
    * _static_
        * [.forStaging(jwtProvider)](#PushNotificationGatewayforStaging) ⇒ [<code>Promise.&lt;PushNotificationGateway&gt;</code>](#PushNotificationGateway)
        * [.forProduction(jwtProvider)](#PushNotificationGatewayforProduction) ⇒ [<code>Promise.&lt;PushNotificationGateway&gt;</code>](#PushNotificationGateway)
    * _constructor_
        * [new PushNotificationGateway(protocol, host, port, environment)](#new_PushNotificationGateway_new)


* * *

### pushNotificationGateway.environment :id=pushnotificationgatewayenvironment
> A description of the environment (e.g. development, production, etc).

**Kind**: instance property of [<code>PushNotificationGateway</code>](#PushNotificationGateway)  
**Returns**: <code>String</code>  
**Access**: public  

* * *

### pushNotificationGateway.connect(jwtProvider) :id=pushnotificationgatewayconnect
> Attempts to establish a connection to the backend. This function should be invoked
> immediately following instantiation. Once the resulting promise resolves, a
> connection has been established and other instance methods can be used.

**Kind**: instance method of [<code>PushNotificationGateway</code>](#PushNotificationGateway)  
**Returns**: [<code>Promise.&lt;PushNotificationGateway&gt;</code>](#PushNotificationGateway)  
**Access**: public  

| Param | Type |
| --- | --- |
| jwtProvider | [<code>JwtProvider</code>](/content/sdk/lib-security?id=jwtprovider) | 


* * *

### pushNotificationGateway.registerDevice(registration) :id=pushnotificationgatewayregisterdevice
> Registers an iOS or Android device to receive push notifications.

**Kind**: instance method of [<code>PushNotificationGateway</code>](#PushNotificationGateway)  
**Returns**: <code>Promise.&lt;(Schema.ApnsRegistration\|Schema.FcmRegistration)&gt;</code>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| registration | [<code>Schema.ApnsRegistration</code>](/content/sdk/lib-data?id=schemaapnsregistration) \| [<code>Schema.FcmRegistration</code>](/content/sdk/lib-data?id=schemafcmregistration) | <p>Information regarding the installation of a mobile app, on a specific device.</p> |


* * *

### pushNotificationGateway.unregisterDevice(data) :id=pushnotificationgatewayunregisterdevice
> Unregisters an iOS or Android device.

**Kind**: instance method of [<code>PushNotificationGateway</code>](#PushNotificationGateway)  
**Returns**: <code>Promise.&lt;Object&gt;</code>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| data | [<code>Schema.UnregisterRequest</code>](/content/sdk/lib-data?id=schemaunregisterrequest) | <p>Information identifying the &quot;registration&quot; to delete.</p> |


* * *

### PushNotificationGateway.forStaging(jwtProvider) :id=pushnotificationgatewayforstaging
> Creates and starts a new [PushNotificationGateway](/content/sdk/lib-gateway?id=pushnotificationgateway) for use in the private staging environment.

**Kind**: static method of [<code>PushNotificationGateway</code>](#PushNotificationGateway)  
**Returns**: [<code>Promise.&lt;PushNotificationGateway&gt;</code>](#PushNotificationGateway)  
**Access**: public  

| Param | Type |
| --- | --- |
| jwtProvider | [<code>JwtProvider</code>](/content/sdk/lib-security?id=jwtprovider) | 


* * *

### PushNotificationGateway.forProduction(jwtProvider) :id=pushnotificationgatewayforproduction
> Creates and starts a new [PushNotificationGateway](/content/sdk/lib-gateway?id=pushnotificationgateway) for use in the public production environment.

**Kind**: static method of [<code>PushNotificationGateway</code>](#PushNotificationGateway)  
**Returns**: [<code>Promise.&lt;PushNotificationGateway&gt;</code>](#PushNotificationGateway)  
**Access**: public  

| Param | Type |
| --- | --- |
| jwtProvider | [<code>JwtProvider</code>](/content/sdk/lib-security?id=jwtprovider) | 


* * *

### new PushNotificationGateway(protocol, host, port, environment) :id=new_pushnotificationgateway_new
**Kind**: constructor of [<code>PushNotificationGateway</code>](#PushNotificationGateway)  

| Param | Type | Description |
| --- | --- | --- |
| protocol | <code>String</code> | <p>The protocol of the of the Barchart Push Notification Service web service (either http or https).</p> |
| host | <code>String</code> | <p>The hostname of the Barchart Push Notification Service web service.</p> |
| port | <code>Number</code> | <p>The TCP port number of the Barchart Push Notification Service web service.</p> |
| environment | <code>String</code> | <p>A description of the environment we're connecting to.</p> |


* * *

