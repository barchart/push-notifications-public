## EnsGateway :id=ensgateway
> The <strong>central component of the SDK</strong>. It is responsible for connecting to Barchart's
> Push Notification Service. It can be used to register and unregister devices.

**Kind**: global class  
**Extends**: <code>Disposable</code>  
**Access**: public  
**Import**: @barchart/push-notifications-client-js/lib/gateway/EnsGateway  
**File**: /lib/gateway/EnsGateway.js  

* [EnsGateway](#EnsGateway) ⇐ <code>Disposable</code>
    * _instance_
        * [.environment](#EnsGatewayenvironment) ⇒ <code>String</code>
        * [.connect(jwtProvider)](#EnsGatewayconnect) ⇒ [<code>Promise.&lt;EnsGateway&gt;</code>](#EnsGateway)
        * [.registerDevice(query)](#EnsGatewayregisterDevice) ⇒ [<code>Promise.&lt;Schema.Device&gt;</code>](/content/sdk/lib-data?id=schemadevice)
        * [.unregisterDevice(query)](#EnsGatewayunregisterDevice) ⇒ <code>Promise.&lt;Object&gt;</code>
    * _static_
        * [.forStaging(jwtProvider)](#EnsGatewayforStaging) ⇒ [<code>Promise.&lt;EnsGateway&gt;</code>](#EnsGateway)
        * [.forProduction(jwtProvider)](#EnsGatewayforProduction) ⇒ [<code>Promise.&lt;EnsGateway&gt;</code>](#EnsGateway)
    * _constructor_
        * [new EnsGateway(protocol, host, port, environment)](#new_EnsGateway_new)


* * *

### ensGateway.environment :id=ensgatewayenvironment
> A description of the environment (e.g. development, production, etc).

**Kind**: instance property of [<code>EnsGateway</code>](#EnsGateway)  
**Returns**: <code>String</code>  
**Access**: public  

* * *

### ensGateway.connect(jwtProvider) :id=ensgatewayconnect
> Attempts to establish a connection to the backend. This function should be invoked
> immediately following instantiation. Once the resulting promise resolves, a
> connection has been established and other instance methods can be used.

**Kind**: instance method of [<code>EnsGateway</code>](#EnsGateway)  
**Returns**: [<code>Promise.&lt;EnsGateway&gt;</code>](#EnsGateway)  
**Access**: public  

| Param | Type |
| --- | --- |
| jwtProvider | [<code>JwtProvider</code>](/content/sdk/lib-security?id=jwtprovider) | 


* * *

### ensGateway.registerDevice(query) :id=ensgatewayregisterdevice
> Registers iOS or Android device to receive push notifications.

**Kind**: instance method of [<code>EnsGateway</code>](#EnsGateway)  
**Returns**: [<code>Promise.&lt;Schema.Device&gt;</code>](/content/sdk/lib-data?id=schemadevice)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| query | [<code>Schema.Device</code>](/content/sdk/lib-data?id=schemadevice) | <p>User information for registering device to receive push notifications.</p> |


* * *

### ensGateway.unregisterDevice(query) :id=ensgatewayunregisterdevice
> Unregisters iOS or Android device.

**Kind**: instance method of [<code>EnsGateway</code>](#EnsGateway)  
**Returns**: <code>Promise.&lt;Object&gt;</code>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| query | [<code>Schema.UnregisterQuery</code>](/content/sdk/lib-data?id=schemaunregisterquery) | <p>User information for unregistering the device to receive push notifications.</p> |


* * *

### EnsGateway.forStaging(jwtProvider) :id=ensgatewayforstaging
> Creates and starts a new [EnsGateway](/content/sdk/lib-gateway?id=ensgateway) for use in the private staging environment.

**Kind**: static method of [<code>EnsGateway</code>](#EnsGateway)  
**Returns**: [<code>Promise.&lt;EnsGateway&gt;</code>](#EnsGateway)  
**Access**: public  

| Param | Type |
| --- | --- |
| jwtProvider | [<code>JwtProvider</code>](/content/sdk/lib-security?id=jwtprovider) | 


* * *

### EnsGateway.forProduction(jwtProvider) :id=ensgatewayforproduction
> Creates and starts a new [EnsGateway](/content/sdk/lib-gateway?id=ensgateway) for use in the public production environment.

**Kind**: static method of [<code>EnsGateway</code>](#EnsGateway)  
**Returns**: [<code>Promise.&lt;EnsGateway&gt;</code>](#EnsGateway)  
**Access**: public  

| Param | Type |
| --- | --- |
| jwtProvider | [<code>JwtProvider</code>](/content/sdk/lib-security?id=jwtprovider) | 


* * *

### new EnsGateway(protocol, host, port, environment) :id=new_ensgateway_new
**Kind**: constructor of [<code>EnsGateway</code>](#EnsGateway)  

| Param | Type | Description |
| --- | --- | --- |
| protocol | <code>String</code> | <p>The protocol of the of the Barchart Push Notification Service web service (either http or https).</p> |
| host | <code>String</code> | <p>The hostname of the Barchart Push Notification Service web service.</p> |
| port | <code>Number</code> | <p>The TCP port number of the Barchart Push Notification Service web service.</p> |
| environment | <code>String</code> | <p>A description of the environment we're connecting to.</p> |


* * *

