## Schema :id=schema
> A meta namespace containing structural contracts of anonymous objects.

**Kind**: global namespace  

* [Schema](#Schema) : <code>object</code>
    * _static_
        * [.Device](#SchemaDevice) : <code>Object</code>
        * [.UnregisterQuery](#SchemaUnregisterQuery) : <code>Object</code>


* * *

### Schema.Device :id=schemadevice
> A device information to register for push notifications

**Kind**: static typedef of [<code>Schema</code>](#Schema)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | <p>The query object</p> |
| query.user | <code>Object</code> | <p>An object contains user data</p> |
| query.user.id | <code>String</code> | <p>A user id</p> |
| query.user.context | <code>String</code> | <p>A user context</p> |
| [query.apns] | <code>Object</code> | <p>An object contains APNS data</p> |
| query.apns.device | <code>String</code> | <p>Unique device token</p> |
| query.apns.bundle | <code>String</code> | <p>An application bundle name</p> |
| [query.fcm] | <code>Object</code> | <p>An object contains FCM data</p> |
| query.fcm.token | <code>String</code> | <p>Unique device token</p> |
| query.fcm.package | <code>String</code> | <p>An application package name</p> |
| query.fcm.iid | <code>String</code> | <p>Firebase IID of device</p> |
| query.provider | <code>String</code> | <p>Provider name</p> |


* * *

### Schema.UnregisterQuery :id=schemaunregisterquery
> An unregister device query.

**Kind**: static typedef of [<code>Schema</code>](#Schema)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | <p>The query object</p> |
| query.user | <code>Object</code> | <p>An object contains user data</p> |
| query.user.id | <code>String</code> | <p>A user id</p> |
| query.user.context | <code>String</code> | <p>A user context</p> |
| query.device | <code>Object</code> | <p>An object contains APNS or FCM data</p> |
| query.device.device | <code>String</code> | <p>APNS device token or FCM IID</p> |
| query.device.bundle | <code>String</code> | <p>Bundle or Package name of the application</p> |


* * *

