## Schema :id=schema
> A meta namespace containing structural contracts of anonymous objects.

**Kind**: global namespace  

* [Schema](#Schema) : <code>object</code>
    * _static_
        * [.User](#SchemaUser) : <code>Object</code>
        * [.ApnsDevice](#SchemaApnsDevice) : <code>Object</code>
        * [.FcmDevice](#SchemaFcmDevice) : <code>Object</code>
        * [.ApnsRegistration](#SchemaApnsRegistration) : <code>Object</code>
        * [.FcmRegistration](#SchemaFcmRegistration) : <code>Object</code>
        * [.UnregisterRequest](#SchemaUnregisterRequest) : <code>Object</code>


* * *

### Schema.User :id=schemauser
> Information that uniquely identifies a user.

**Kind**: static typedef of [<code>Schema</code>](#Schema)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | <p>The unique identifier for the user (within the context). Use &quot;ANONYMOUS&quot; when user is unknown.</p> |
| context | <code>String</code> | <p>A value assigned to you by Barchart, (e.g. application or customer name).</p> |


* * *

### Schema.ApnsDevice :id=schemaapnsdevice
> Information regarding an iOS device (used to communicate with APNs).

**Kind**: static typedef of [<code>Schema</code>](#Schema)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| device | <code>String</code> | <p>The unique identifier for the iOS device (obtained from an instance of the app, installed on an actual device).</p> |
| bundle | <code>String</code> | <p>The bundle name of a mobile application registered with APNs (used to identify the app, the same value across all devices).</p> |


* * *

### Schema.FcmDevice :id=schemafcmdevice
> Information regarding an Android device (used to communicate with FCM).

**Kind**: static typedef of [<code>Schema</code>](#Schema)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [iid] | <code>String</code> | <p>The Firebase IID (FCM deprecated this field, can be omitted).</p> |
| token | <code>String</code> | <p>The Firebase device token (obtained from an instance of the app, installed on an actual device).</p> |
| package | <code>String</code> | <p>The package name of a mobile application registered with FCM (used to identify the app, the same value across all devices).</p> |


* * *

### Schema.ApnsRegistration :id=schemaapnsregistration
> Information a mobile app installation on a specific iOS device.

**Kind**: static typedef of [<code>Schema</code>](#Schema)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| user | [<code>User</code>](#SchemaUser) | <p>The user of the mobile app.</p> |
| apns | [<code>ApnsDevice</code>](#SchemaApnsDevice) | <p>Data regarding the app, installed on a specific device.</p> |
| provider | <code>String</code> | <p>A value assigned to you by Barchart, used to identify keys for communication with APNs. Typically the same as the user's context.</p> |


* * *

### Schema.FcmRegistration :id=schemafcmregistration
> Information a mobile app installation on a specific Android device.

**Kind**: static typedef of [<code>Schema</code>](#Schema)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| user | [<code>User</code>](#SchemaUser) | <p>The user of the mobile app.</p> |
| fcm | [<code>FcmDevice</code>](#SchemaFcmDevice) | <p>Data regarding the app, installed on a specific device.</p> |
| provider | <code>String</code> | <p>A value assigned to you by Barchart, used to identify keys for communication with APNs. Typically the same as the user's context.</p> |


* * *

### Schema.UnregisterRequest :id=schemaunregisterrequest
> Data used identify a &quot;registration&quot; for deletion.

**Kind**: static typedef of [<code>Schema</code>](#Schema)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| request | <code>Object</code> |  |
| request.user | [<code>User</code>](#SchemaUser) | <p>The user of the mobile app.</p> |
| request.device | <code>Object</code> | <p>Identifiers for the mobile app installation (on a specific device).</p> |
| request.device.device | <code>String</code> | <p>The device token (for APNs) or an IID (for FCM).</p> |
| request.device.bundle | <code>String</code> | <p>The bundle name (APNs) or the package name (FCM).</p> |


* * *

