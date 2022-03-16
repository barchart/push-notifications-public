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

### UserInfo :id=schemasuserinfo
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

### ApnsInfo :id=schemasapnsinfo
**Type**: <code>Object</code>

>Information regarding an iOS device (used to communicate with APNS).

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| device | <code>String</code> | true | false | The unique identifer for the iOS device. |
| bundle | <code>String</code> | true | false | The bundle name of a mobile application registered with APNS. |


**Example**:

```json
{
  "device": "6f2dfb1ee3f636e93fad5189710d4fa92edb8ec13d1e39d1bb9d9acd1286f012",
  "bundle": "com.barchart.ens"
}
```

* * *

### FcmInfo :id=schemasfcminfo
**Type**: <code>Object</code>

>Information regarding an APNS device (used to communicate with FCM).

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

### RegisterRequestForApns :id=schemasregisterrequestforapns
**Type**: <code>Object</code>

>Data used to &quot;register&quot; an iOS device (for use with APNS).

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| user | [<code>UserInfo</code>](#schemasUserInfo) | true | false |  |
| apns | [<code>ApnsInfo</code>](#schemasApnsInfo) | true | false |  |
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

### RegisterRequestForFcm :id=schemasregisterrequestforfcm
**Type**: <code>Object</code>

>Data used to &quot;register&quot; an Android device (for use with FCM).

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| user | [<code>UserInfo</code>](#schemasUserInfo) | true | false |  |
| fcm | [<code>FcmInfo</code>](#schemasFcmInfo) | true | false |  |
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
| device | <code>String</code> | false | false | The device token (for APNS) or an IID (for FCM). |
| bundle | <code>String</code> | false | false | The bundle name (APNS) or the package name (FCM). |
| user | <code>String</code> | false | false | The unique identifier for the user (within the context). |
| context | <code>String</code> | false | false | A value assigned to you by Barchart, (e.g. application or customer name). |


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

### NotificationRequestForUser :id=schemasnotificationrequestforuser
**Type**: <code>Object</code>

>The object required to send a notification to a specific user.

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| user | <code>String</code> | false | false | The unique identifier for the user (within the context). |
| context | <code>String</code> | false | false | A value assigned to you by Barchart, (e.g. application or customer name). |
| bundle | <code>String</code> | false | false | The bundle name (APNS) or the package name (FCM). |
| notification | [<code>NotificationContent</code>](#schemasNotificationContent) | false | false |  |
| development | <code>Boolean</code> | false | false | If true, the APNS sandbox is used. |


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

### NotificationRequestForDevice :id=schemasnotificationrequestfordevice
**Type**: <code>Object</code>

>The object required to send a notification to a specific device.

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| device | <code>String</code> | false | false | A device token (for APNS) or an IID (for FCM) |
| notification | [<code>NotificationContent</code>](#schemasNotificationContent) | false | false |  |
| development | <code>Boolean</code> | false | false | If true, the APNS sandbox is used. |


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

### NotificationRequestForBundle :id=schemasnotificationrequestforbundle
**Type**: <code>Object</code>

>The object required to send a notification to a bundle (multiple devices).

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| bundle | <code>String</code> | false | false | The bundle name (APNS) or the package name (FCM). |
| notification | [<code>NotificationContent</code>](#schemasNotificationContent) | false | false |  |
| development | <code>Boolean</code> | false | false | If true, the APNS sandbox is used. |


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
| title | <code>String</code> | false | false | The title of the notification. |
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


