# Components

## Responses

### ErrorResponse :id=responseserrorresponse
> Object with array of errors

**Content Type**: <code>application/json</code>

**Response Type:** <code><code>Object</code></code>

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| errors | <code>Array</code> | false | false |  |
| errors[i] | <code>String</code> | false | false |  |

**Example**:

```json
{
  "errors": [
    "string"
  ]
}
```

* * *

## Schemas

### User :id=schemasuser
**Type**: <code>Object</code>

>Information that uniquely identifies a user.

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| id | <code>String</code> | true | false | The unique identifier for the user (within the context). |
| context | <code>String</code> | true | false | A value assigned to you by Barchart, (e.g. application or customer name). |


**Example**:

```json
{
  "id": "abc-12345678",
  "context": "my-company"
}
```

* * *

### ApnsDevice :id=schemasapnsdevice
**Type**: <code>Object</code>

>Information regarding an iOS device (used to communicate with APNs).

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| device | <code>String</code> | true | false | The unique identifer for the iOS device. |
| bundle | <code>String</code> | true | false | The bundle name of a mobile application registered with APNs. |


**Example**:

```json
{
  "device": "6f2dfb1ee3f636e93fad5189710d4fa92edb8ec13d1e39d1bb9d9acd1286f012",
  "bundle": "com.barchart.ens"
}
```

* * *

### FcmDevice :id=schemasfcmdevice
**Type**: <code>Object</code>

>Information regarding an APNs device (used to communicate with FCM).

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| iid | <code>String</code> | true | false | The Firebase IID. |
| token | <code>String</code> | true | false | The Firebase device token. |
| package | <code>String</code> | true | false | The package name of a mobile application registered with FCM. |


**Example**:

```json
{
  "iid": "ca1GWEasSt-LfySsUq_qhi",
  "token": "ca1GWEasSt-LfySsUq_qhi:APA91bG4YXRvS5dxzUXnDGDgvAh7aojLqZg_21XeiHloaF2Wxqfioyi7JY1sIiFN_oX2_3ye3cgj1cK2forNFIuyo-YVvDd6iwQISXOwVHeJL34j6SuKcaXqqnikn-cPdZ3gb-iSmasd",
  "package": "com.barchart.com"
}
```

* * *

### ApnsRegistration :id=schemasapnsregistration
**Type**: <code>Object</code>

>Data used to &quot;register&quot; an iOS device (for use with APNs).

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| user | [<code>User</code>](#schemasUser) | true | false |  |
| apns | [<code>ApnsDevice</code>](#schemasApnsDevice) | true | false |  |
| provider | <code>String</code> | true | false | A value assigned to you by Barchart, typically the same as your context. |


**Example**:

```json
{
  "user": {
    "id": "abc-12345678",
    "context": "my-company"
  },
  "apns": {
    "device": "6f2dfb1ee3f636e93fad5189710d4fa92edb8ec13d1e39d1bb9d9acd1286f012",
    "bundle": "com.barchart.ens"
  },
  "provider": "string"
}
```

* * *

### FcmRegistration :id=schemasfcmregistration
**Type**: <code>Object</code>

>Data used to &quot;register&quot; an Android device (for use with FCM).

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| user | [<code>User</code>](#schemasUser) | true | false |  |
| fcm | [<code>FcmDevice</code>](#schemasFcmDevice) | true | false |  |
| provider | <code>String</code> | true | false | A value assigned to you by Barchart, typically the same as your context. |


**Example**:

```json
{
  "user": {
    "id": "abc-12345678",
    "context": "my-company"
  },
  "fcm": {
    "iid": "ca1GWEasSt-LfySsUq_qhi",
    "token": "ca1GWEasSt-LfySsUq_qhi:APA91bG4YXRvS5dxzUXnDGDgvAh7aojLqZg_21XeiHloaF2Wxqfioyi7JY1sIiFN_oX2_3ye3cgj1cK2forNFIuyo-YVvDd6iwQISXOwVHeJL34j6SuKcaXqqnikn-cPdZ3gb-iSmasd",
    "package": "com.barchart.com"
  },
  "provider": "string"
}
```

* * *

### UnregisterRequest :id=schemasunregisterrequest
**Type**: <code>Object</code>

>Data used to &quot;unregister&quot; an iOS or Android device.

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| device | <code>String</code> | true | false | The device token (for APNs) or an IID (for FCM). |
| bundle | <code>String</code> | true | false | The bundle name (APNs) or the package name (FCM). |
| user | <code>String</code> | true | false | The unique identifier for the user (within the context). |
| context | <code>String</code> | true | false | A value assigned to you by Barchart, (e.g. application or customer name). |


**Example**:

```json
{
  "device": "ca1GWEasSt-LfySsUq_qhi",
  "bundle": "com.barchart.ens",
  "user": "abc-12345678",
  "context": "my-company"
}
```

* * *

### NotificationForUser :id=schemasnotificationforuser
**Type**: <code>Object</code>

>The object required to send a notification to a specific user (multiple devices).

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| user | <code>String</code> | true | false | The unique identifier for the user (within the context). |
| context | <code>String</code> | true | false | A value assigned to you by Barchart, (e.g. application or customer name). |
| bundle | <code>String</code> | true | false | The bundle name (APNs) or the package name (FCM). |
| notification | [<code>NotificationContent</code>](#schemasNotificationContent) | true | false |  |
| development | <code>Boolean</code> | false | false | If true, the APNs sandbox is used. |


**Example**:

```json
{
  "user": "abc-12345678",
  "context": "my-company",
  "bundle": "com.barchart.ens",
  "notification": {
    "title": "Test Notification Title",
    "subtitle": "Test Notification Subtitle",
    "body": "We thought you should know — an important event just happened.",
    "category": "string",
    "icon": "string",
    "image": "string",
    "sound": "string",
    "badge": "string",
    "color": "string",
    "click_action": "string",
    "data": {
      "property1": null,
      "property2": null
    }
  },
  "development": false
}
```

* * *

### NotificationForDevice :id=schemasnotificationfordevice
**Type**: <code>Object</code>

>The object required to send a notification to a specific device.

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| device | <code>String</code> | true | false | A device token (for APNs) or an IID (for FCM) |
| notification | [<code>NotificationContent</code>](#schemasNotificationContent) | true | false |  |
| development | <code>Boolean</code> | false | false | If true, the APNs sandbox is used. |


**Example**:

```json
{
  "device": "ca1GWEasSt-LfySsUq_qhi",
  "notification": {
    "title": "Test Notification Title",
    "subtitle": "Test Notification Subtitle",
    "body": "We thought you should know — an important event just happened.",
    "category": "string",
    "icon": "string",
    "image": "string",
    "sound": "string",
    "badge": "string",
    "color": "string",
    "click_action": "string",
    "data": {
      "property1": null,
      "property2": null
    }
  },
  "development": false
}
```

* * *

### NotificationnForBundle :id=schemasnotificationnforbundle
**Type**: <code>Object</code>

>The object required to send a notification to a bundle (multiple devices).

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| bundle | <code>String</code> | true | false | The bundle name (APNs) or the package name (FCM). |
| notification | [<code>NotificationContent</code>](#schemasNotificationContent) | true | false |  |
| development | <code>Boolean</code> | false | false | If true, the APNs sandbox is used. |


**Example**:

```json
{
  "bundle": "com.barchart.ens",
  "notification": {
    "title": "Test Notification Title",
    "subtitle": "Test Notification Subtitle",
    "body": "We thought you should know — an important event just happened.",
    "category": "string",
    "icon": "string",
    "image": "string",
    "sound": "string",
    "badge": "string",
    "color": "string",
    "click_action": "string",
    "data": {
      "property1": null,
      "property2": null
    }
  },
  "development": false
}
```

* * *

### NotificationContent :id=schemasnotificationcontent
**Type**: <code>Object</code>

>The content of a notification (e.g. title, body, etc).

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| title | <code>String</code> | true | false | The title of the notification. |
| subtitle | <code>String</code> | false | false | The subtitle of the notification. |
| body | <code>String</code> | false | false | The content of the notification. |
| category | <code>String</code> | false | false |  |
| icon | <code>String</code> | false | false |  |
| image | <code>String</code> | false | false |  |
| sound | <code>String</code> | false | false |  |
| badge | <code>String</code> | false | false |  |
| color | <code>String</code> | false | false |  |
| click_action | <code>String</code> | false | false |  |
| data | <code>Object</code> | false | false |  |


**Example**:

```json
{
  "title": "Test Notification Title",
  "subtitle": "Test Notification Subtitle",
  "body": "We thought you should know — an important event just happened.",
  "category": "string",
  "icon": "string",
  "image": "string",
  "sound": "string",
  "badge": "string",
  "color": "string",
  "click_action": "string",
  "data": {
    "property1": null,
    "property2": null
  }
}
```

* * *

### JobInfo :id=schemasjobinfo
**Type**: <code>Object</code>

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| id | <code>String</code> | false | false | The job identifier. |
| status | <code>String</code> | false | false | The status of the job (CREATED/DONE/IN_PROGRESS) |
| request | <code>String</code> | false | false | The original request which spawned the job. |
| scan | <code>Object</code> | false | false |  |
| scan.last | <code>String</code> | false | false | The last device processed. |
| system | <code>Object</code> | false | false |  |
| system.created | <code>Number</code> | false | false | Date the job was created (milliseconds since epoch). |
| system.updated | <code>Number</code> | false | false | Date the job was updated (milliseconds since epoch). |
| system.finished | <code>Number</code> | false | false | Date the job finished (milliseconds since epoch). |


**Example**:

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "string",
  "request": "string",
  "scan": {
    "last": "string"
  },
  "system": {
    "created": 0,
    "updated": 0,
    "finished": 0
  }
}
```

* * *

## Security

### Jwt-Consumer :id=securityjwt-consumer

>The JWT used to register and unregister devices.

**Type**: http bearer

#### Headers
| Name | Format | Example |
| ---- | ------ | ------- |
| Authorization | JWT | Authorization: Bearer <code>&lt;Token&gt;</code> |

* * *

### Jwt-Admin :id=securityjwt-admin

>The JWT used to send notifications and query jobs.

**Type**: http bearer

#### Headers
| Name | Format | Example |
| ---- | ------ | ------- |
| Authorization | JWT | Authorization: Bearer <code>&lt;Token&gt;</code> |

* * *


