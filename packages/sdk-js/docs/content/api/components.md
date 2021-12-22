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

### RAW-FCM-Notification :id=schemasraw-fcm-notification
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| Notification | <code>Object</code> |  | false |  |
| Notification.Title | <code>String</code> | false | false | The notification's title. |
| Notification.Body | <code>String</code> | false | false | The notification's body text. |
| Notification.Icon | <code>String</code> | false | false | The notification's icon. Sets the notification icon to myicon for drawable resource myicon. |
| Notification.Color | <code>String</code> | false | false | The notification's icon color, expressed in #rrggbb format. |
| Notification.ChannelID | <code>String</code> | false | false | The notification's channel ID. |
| Notification.ClickAction | <code>String</code> | false | false | The action associated with a user click on the notification. |
| Data | <code>Object</code> | false | false |  |

**Example**:

```json
{
  "Notification": {
    "Title": "string",
    "Body": "string",
    "Icon": "string",
    "Color": "string",
    "ChannelID": "string",
    "ClickAction": "string"
  },
  "Data": {}
}
```

* * *

### Simple-Notification :id=schemassimple-notification
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| title | <code>String</code> | true | false | The notification's title. |
| body | <code>String</code> | true | false | The notification's body text. |
| icon | <code>String</code> | false | false | The notification's icon. Sets the notification icon to myicon for drawable resource myicon. |
| color | <code>String</code> | false | false | The notification's icon color, expressed in #rrggbb format. |
| image | <code>String</code> | false | false | Contains the URL of an image that is going to be downloaded on the device and displayed in a notification. |
| click_action | <code>String</code> | false | false | The action associated with a user click on the notification. |
| data | <code>Object</code> | false | false | Custom data: arbitrary key/value payload. |

**Example**:

```json
{
  "title": "string",
  "body": "string",
  "icon": "string",
  "color": "string",
  "image": "string",
  "click_action": "string",
  "data": {}
}
```

* * *

### Simple-Notification-APNs :id=schemassimple-notification-apns
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| title | <code>String</code> | true | false | The notification's title. |
| subtitle | <code>String</code> | false | false | The notification's subtitle. |
| body | <code>String</code> | true | false | The notification's body text. |
| category | <code>String</code> | false | false | The notification's category. |
| data | <code>Object</code> | false | false | Custom data: arbitrary key/value payload. |

**Example**:

```json
{
  "title": "Title: Hello from GO",
  "subtitle": "subTitle: This is awesome",
  "body": "Even more Content",
  "category": "alert",
  "data": {}
}
```

* * *

### RAW-APNs-Notification :id=schemasraw-apns-notification
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| aps | <code>Object</code> |  | false |  |
| aps.alert | <code>Object</code> |  | false |  |
| aps.alert.title | <code>String</code> | false | false |  |
| aps.alert.subtitle | <code>String</code> | false | false |  |
| aps.alert.body | <code>String</code> | false | false |  |
| aps.alert.thread_identifier | <code>String</code> | false | false |  |
| aps.alert.category | <code>String</code> | false | false |  |
| aps.badge | <code>Number</code> | false | false |  |
| custom-data | <code>Object</code> | false | false |  |

**Example**:

```json
{
  "aps": {
    "alert": {
      "title": "string",
      "subtitle": "string",
      "body": "string",
      "thread_identifier": "string",
      "category": "string"
    },
    "badge": 0
  },
  "custom-data": {}
}
```

* * *

### User :id=schemasuser
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| id | <code>String</code> | true | false | A user ID |
| context | <code>String</code> | true | false | A user context (e.g. barchart) |

**Example**:

```json
{
  "id": "12345678",
  "context": "string"
}
```

* * *

### Apns :id=schemasapns
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| device | <code>String</code> | true | false | A device token |
| bundle | <code>String</code> | true | false | An application bundle name |

**Example**:

```json
{
  "device": "6f2dfb1ee3f636e93fad5189710d4fa92edb8ec13d1e39d1bb9d9acd1286f012",
  "bundle": "com.barchart.ens"
}
```

* * *

### Fcm :id=schemasfcm
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| iid | <code>String</code> | true | false | Firebase IID |
| token | <code>String</code> | true | false | Firebase device token |
| package | <code>String</code> | true | false | An application package name |

**Example**:

```json
{
  "iid": "ca1GWEasSt-LfySsUq_qhi",
  "token": "ca1GWEasSt-LfySsUq_qhi:APA91bG4YXRvS5dxzUXnDGDgvAh7aojLqZg_21XeiHloaF2Wxqfioyi7JY1sIiFN_oX2_3ye3cgj1cK2forNFIuyo-YVvDd6iwQISXOwVHeJL34j6SuKcaXqqnikn-cPdZ3gb-iSmasd",
  "package": "com.barchart.com"
}
```

* * *

### ApnsRegister :id=schemasapnsregister
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| user | [<code>User</code>](#schemasUser) | true | false |  |
| apns | [<code>Apns</code>](#schemasApns) | true | false |  |
| provider | <code>String</code> | true | false | An APNS or FCM provider |

**Example**:

```json
{
  "user": {
    "id": "12345678",
    "context": "string"
  },
  "apns": {
    "device": "6f2dfb1ee3f636e93fad5189710d4fa92edb8ec13d1e39d1bb9d9acd1286f012",
    "bundle": "com.barchart.ens"
  },
  "provider": "string"
}
```

* * *

### FcmRegister :id=schemasfcmregister
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| user | [<code>User</code>](#schemasUser) | true | false |  |
| fcm | [<code>Fcm</code>](#schemasFcm) | true | false |  |
| provider | <code>String</code> | true | false | An APNS or FCM provider |

**Example**:

```json
{
  "user": {
    "id": "12345678",
    "context": "string"
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

### Notification :id=schemasnotification
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| title | <code>String</code> | false | false | An notification title |
| subtitle | <code>String</code> | false | false |  |
| body | <code>String</code> | false | false | An notification body |
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
  "title": "Test notification",
  "subtitle": "string",
  "body": "Something happened",
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

### SendByUser :id=schemassendbyuser
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| user | <code>String</code> | false | false | A user ID |
| context | <code>String</code> | false | false | A user context (e.g. barchart) |
| bundle | <code>String</code> | false | false | An application bundle or package name |
| notification | [<code>Notification</code>](#schemasNotification) |  | false |  |
| development | <code>Boolean</code> | false | false | Uses sandbox for APNS if true |

**Example**:

```json
{
  "user": "12345678",
  "context": "barchart",
  "bundle": "com.barchart.ens",
  "notification": {
    "title": "Test notification",
    "subtitle": "string",
    "body": "Something happened",
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
  "development": true
}
```

* * *

### SendByDevice :id=schemassendbydevice
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| device | <code>String</code> | false | false | APNS device token or FCM IID |
| notification | [<code>Notification</code>](#schemasNotification) |  | false |  |
| development | <code>Boolean</code> | false | false | Uses sandbox for APNS if true |

**Example**:

```json
{
  "device": "ca1GWEasSt-LfySsUq_qhi",
  "notification": {
    "title": "Test notification",
    "subtitle": "string",
    "body": "Something happened",
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
  "development": true
}
```

* * *

### SendByBundle :id=schemassendbybundle
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| bundle | <code>String</code> | false | false | An application bundle or package name |
| notification | [<code>Notification</code>](#schemasNotification) |  | false |  |
| development | <code>Boolean</code> | false | false | Uses sandbox for APNS if true |

**Example**:

```json
{
  "bundle": "com.barchart.ens",
  "notification": {
    "title": "Test notification",
    "subtitle": "string",
    "body": "Something happened",
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
  "development": true
}
```

* * *

### FCMResponse :id=schemasfcmresponse
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| StatusCode | <code>Integer</code> | false | false |  |
| Response | <code>Object</code> |  | false | Response represents the FCM server's response to the application server's sent message |
| Response.multicast_id | <code>Integer</code> | false | false |  |
| Response.success | <code>Integer</code> | false | false |  |
| Response.failure | <code>Integer</code> | false | false |  |
| Response.canonical_ids | <code>Integer</code> | false | false |  |
| Response.results | <code>Array&lt;object&gt;</code> | false | false | Result represents the status of a processed message |
| Response.results[i].message_id | <code>String</code> | false | false |  |
| Response.results[i].registration_id | <code>String</code> | false | false |  |
| Response.results[i].error | <code>String</code> | false | true |  |
| Response.failed_registration_ids | <code>Array</code> | false | true | Device Group HTTP Response |
| Response.failed_registration_ids[i] | <code>String</code> | false | false |  |
| Response.message_id | <code>Integer</code> | false | false |  |
| Response.error | <code>String</code> | false | true |  |

**Example**:

```json
{
  "StatusCode": 200,
  "Response": {
    "multicast_id": 8758031548066235000,
    "success": 1,
    "failure": 0,
    "canonical_ids": 0,
    "results": [
      {
        "message_id": "0:1587579700287156%a62f20e7a62f20e7",
        "registration_id": "",
        "error": "string"
      }
    ],
    "failed_registration_ids": [
      "string"
    ],
    "message_id": 0,
    "error": "string"
  }
}
```

* * *

### APNSResponse :id=schemasapnsresponse
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| StatusCode | <code>Number</code> | false | false |  |
| Reson | <code>String</code> | false | false |  |
| ApnsID | <code>String</code> | false | false |  |
| Timestamp | <code>String</code> | false | false |  |

**Example**:

```json
{
  "StatusCode": 200,
  "Reson": "",
  "ApnsID": "D17EF06E-3DCF-E5EE-BBD5-31B4B75CAD63",
  "Timestamp": "0001-01-01T00:00:00Z"
}
```

* * *

### Device :id=schemasdevice
**Type**: <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| user | <code>Object</code> |  | false |  |
| user.id | <code>String</code> | false | false |  |
| user.context | <code>String</code> | false | false |  |
| user.unique | <code>String</code> | false | false |  |
| provider | <code>Object</code> |  | false |  |
| provider.secret | <code>String</code> | false | false |  |
| type | <code>String</code> | false | false |  |
| apns | <code>Object</code> |  | false |  |
| apns.device | <code>String</code> | false | false |  |
| apns.bundle | <code>String</code> | false | false |  |
| fcm | <code>Object</code> |  | false |  |
| fcm.iid | <code>String</code> | false | false |  |
| fcm.token | <code>String</code> | false | false |  |
| fcm.package | <code>String</code> | false | false |  |
| timestamp | <code>Number</code> | false | false |  |

**Example**:

```json
{
  "user": {
    "id": "00000000",
    "context": "barchart",
    "unique": "barchart|00000000"
  },
  "provider": {
    "secret": "barchart"
  },
  "type": "APNS",
  "apns": {
    "device": "78ca4b1930f9464f22ad8bb6a6b83d735273fcb4a588108bacadd2fb878149f0",
    "bundle": "com.barchart.ens"
  },
  "fcm": {
    "iid": "fOxNSJtbSAKKgUDrwDOrHH",
    "token": "fOxNSJtbSAKKgUDrwDOrHH:APA91bFm_oZ_DA8SvvR1VND1PNpAaa4BNEps0PISF4sRWEBq2nLATLiTO63E3JnBIZ9arwFQmUquft_tr24BKHT2w5rgdy8SeZuubE-UUQNrTEbB00ObeT1N5P-2_XPq75Xzu758MaPK",
    "package": "com.barchart.ens"
  },
  "timestamp": 1626688692651
}
```

* * *

## Security

### JWT :id=securityjwt

>The JWT authorization for register/unregister endpoints

**Type**: http bearer
    
#### Headers
| Name | Format | Example |
| ---- | ------ | ------- |
| Authorization | JWT | Authorization: Bearer <code>&lt;Token&gt;</code> |

* * *

### JwtAdmin :id=securityjwtadmin

>The JWT authorization for send and job endpoints

**Type**: http bearer
    
#### Headers
| Name | Format | Example |
| ---- | ------ | ------- |
| Authorization | JWT | Authorization: Bearer <code>&lt;Token&gt;</code> |

* * *


