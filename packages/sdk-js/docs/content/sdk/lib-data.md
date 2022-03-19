## Schema :id=schema
> A meta namespace containing structural contracts of anonymous objects.

**Kind**: global namespace  

* [Schema](#Schema) : <code>object</code>
    * _static_
        * [.Device](#SchemaDevice) : <code>Object</code>
        * [.UnregisterRequest](#SchemaUnregisterRequest) : <code>Object</code>


* * *

### Schema.Device :id=schemadevice
> A device information to register for push notifications

**Kind**: static typedef of [<code>Schema</code>](#Schema)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| device | <code>Object</code> |  |
| device.user | <code>Object</code> | <p>An object contains user data</p> |
| device.user.id | <code>String</code> | <p>A user id</p> |
| device.user.context | <code>String</code> | <p>A user context</p> |
| [device.apns] | <code>Object</code> | <p>An object contains APNs data</p> |
| device.apns.device | <code>String</code> | <p>Unique device token</p> |
| device.apns.bundle | <code>String</code> | <p>An application bundle name</p> |
| [device.fcm] | <code>Object</code> | <p>An object contains FCM data</p> |
| device.fcm.token | <code>String</code> | <p>Unique device token</p> |
| device.fcm.package | <code>String</code> | <p>An application package name</p> |
| device.fcm.iid | <code>String</code> | <p>Firebase IID of device</p> |
| device.provider | <code>String</code> | <p>Provider name</p> |


* * *

### Schema.UnregisterRequest :id=schemaunregisterrequest
> Data structure used to unregister a device.

**Kind**: static typedef of [<code>Schema</code>](#Schema)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| request | <code>Object</code> |  |
| request.user | <code>Object</code> | <p>An object contains user data</p> |
| request.user.id | <code>String</code> | <p>A user id</p> |
| request.user.context | <code>String</code> | <p>A user context</p> |
| request.device | <code>Object</code> | <p>An object contains APNs or FCM data</p> |
| request.device.device | <code>String</code> | <p>APNs device token or FCM IID</p> |
| request.device.bundle | <code>String</code> | <p>Bundle or Package name of the application</p> |


* * *

