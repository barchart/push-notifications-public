# Paths

## POST /v1/fcm/registerDevice 

> Register an Android device for notifications with FCM. If you provide a userId and realtimeUserId in the same request, it would create 2 records with the following contexts: 'anonymous' and 'realtime'

**Summary**: Register Device

#### Request Body
    
**Content Type**: application/json

**Type**: <code>Object</code>

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| deviceID | <code>String</code> | true | false | Firebase IID |
| tokenID | <code>String</code> | true | false | FCM Registration Token ID |
| bundleID | <code>String</code> | true | false | Bundle or site ID |
| realtimeUserID | <code>String</code> | false | false | Realtime user ID |
| userID | <code>String</code> | false | false | User ID |
| logging | <code>Boolean</code> | false | false | Debug logging flag for the SUCCESS responses |

**Example**:

```json
{
  "deviceID": "string",
  "tokenID": "string",
  "bundleID": "string",
  "realtimeUserID": "CHS-borjatesting30@mailinator.com",
  "userID": "12345678",
  "logging": true
}
```

#### Responses

**Status Code**: 200

> Device has been registered.

**Content Type**: <code>application/json</code>

**Response Type:** <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| deviceID | <code>String</code> | true | false | Firebase IID |
| tokenID | <code>String</code> | true | false | FCM Registration Token ID |
| bundleID | <code>String</code> | true | false | Bundle or site ID |
| realtimeUserID | <code>String</code> | true | false | Realtime user ID |
| userID | <code>String</code> | true | false | User ID |

**Example**:

```json
{
  "deviceID": "ca1GWEasSt-LfySsUq_qhi",
  "tokenID": "ca1GWEasSt-LfySsUq_qhi:APA91bG4YXRvS5dxzUXnDGDgvAh7aojLqZg_21XeiHloaF2Wxqfioyi7JY1sIiFN_oX2_3ye3cgj1cK2forNFIuyo-YVvDd6iwQISXOwVHeJL34j6SuKcaXqqnikn-cPdZ3gb-iSmasd",
  "bundleID": "com.barchart.ens",
  "realtimeUserID": "CHS-borjatesting30@mailinator.com",
  "userID": "12345678"
}
```

* * *

**Status Code**: 400 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

**Status Code**: 500 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

## POST /v1/fcm/sendNotification 

> Send a notification to Android device(s) with FCM.

**Summary**: Send Notification

#### Request Body
    
**Content Type**: application/json

**Type**: <code>Object</code>

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| deviceID | <code>String</code> | false | false | Firebase IID |
| tokenID | <code>String</code> | false | false | FCM Token ID |
| bundleID | <code>String</code> | false | false | Bundle or site ID |
| realtimeUserID | <code>String</code> | false | false | Realtime user ID |
| userID | <code>String</code> | false | false | User ID |
| notification | [<code>Simple-Notification</code>](/content/api/components?id=schemasSimple-Notification) |  | false |  |
| message | [<code>RAW-FCM-Notification</code>](/content/api/components?id=schemasRAW-FCM-Notification) |  | false |  |
| logging | <code>Boolean</code> | false | false | Debug logging flag for the SUCCESS responses |
| userContext | <code>String</code> | false | false | Optional parameter. Determines a user context. Default values: 'anonymous' for userId and 'realtime' for realtimeUserId |
| provider | <code>String</code> | false | false | Optional parameter. Determines APNS keys to send notifications. Default value: barchart |

**Example**:

```json
{
  "deviceID": "ca1GWEasSt-LfySsUq_qhi",
  "tokenID": "ca1GWEasSt-LfySsUq_qhi:APA91bG4YXRvS5dxzUXnDGDgvAh7aojLqZg_21XeiHloaF2Wxqfioyi7JY1sIiFN_oX2_3ye3cgj1cK2forNFIuyo-YVvDd6iwQISXOwVHeJL34j6SuKcaXqqnikn-cPdZ3gb-iSmasd",
  "bundleID": "com.barchart.ens",
  "realtimeUserID": "CHS-borjatesting30@mailinator.com",
  "userID": "12345678",
  "notification": {
    "title": "string",
    "body": "string",
    "icon": "string",
    "color": "string",
    "image": "string",
    "click_action": "string",
    "data": {}
  },
  "message": {
    "Notification": {
      "Title": "string",
      "Body": "string",
      "Icon": "string",
      "Color": "string",
      "ChannelID": "string",
      "ClickAction": "string"
    },
    "Data": {}
  },
  "logging": true,
  "userContext": "string",
  "provider": "string"
}
```

#### Responses

**Status Code**: 200

> OK

**Content Type**: <code>application/json</code>

**Response Type:** [<code>FCMResponse</code>](/content/api/components?id=schemasFCMResponse)

**Example**:

```
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

**Status Code**: 400 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

**Status Code**: 500 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

## POST /v1/apns/registerDevice 

> Register an iOS device for notifications with APNs. If you provide a userId and realtimeUserId in the same request, it would create 2 records with the following contexts: 'anonymous' and 'realtime'

**Summary**: Register Device

#### Request Body
    
**Content Type**: application/json

**Type**: <code>Object</code>

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| deviceID | <code>String</code> | true | false | Device ID (Unique ID to identify iOS device) |
| bundleID | <code>String</code> | true | false | Bundle or site ID |
| realtimeUserID | <code>String</code> | false | false | Realtime user ID |
| userID | <code>String</code> | false | false | User ID |
| logging | <code>Boolean</code> | false | false | Debug logging flag for the SUCCESS responses |

**Example**:

```json
{
  "deviceID": "f70211b7d3ac7630567898fb861632f5566a57b59bf2809ddd61b5170e61adfd",
  "bundleID": "com.barchart.ens",
  "realtimeUserID": "CHS-borjatesting30@mailinator.com",
  "userID": "12345678",
  "logging": true
}
```

#### Responses

**Status Code**: 200

> OK

**Content Type**: <code>application/json</code>

**Response Type:** <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| deviceID | <code>String</code> | false | false | Device ID (Unique ID to identify iOS device) |
| bundleID | <code>String</code> | false | false | Bundle or site ID |
| realtimeUserID | <code>String</code> | false | false | Realtime user ID |
| userID | <code>String</code> | false | false | User ID |

**Example**:

```json
{
  "deviceID": "f70211b7d3ac7630567898fb861632f5566a57b59bf2809ddd61b5170e61adfd",
  "bundleID": "com.barchart.ens",
  "realtimeUserID": "CHS-borjatesting30@mailinator.com",
  "userID": "12345678"
}
```

* * *

**Status Code**: 400 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

**Status Code**: 500 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

## POST /v1/apns/sendNotification 

> Send a notification to iOS device(s) with APNs.

**Summary**: Send Notification

#### Request Body
    
**Content Type**: application/json

**Type**: <code>Object</code>

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| development | <code>Boolean</code> | false | false | Development Sending mode (Boolean, Optional) |
| deviceID | <code>String</code> | false | false | Device ID (Unique ID to identify iOS device) |
| bundleID | <code>String</code> | false | false | Bundle or site ID |
| realtimeUserID | <code>String</code> | false | false | Realtime user ID |
| userID | <code>String</code> | false | false | User ID |
| notification | [<code>Simple-Notification-APNs</code>](/content/api/components?id=schemasSimple-Notification-APNs) |  | false |  |
| apns | [<code>RAW-APNs-Notification</code>](/content/api/components?id=schemasRAW-APNs-Notification) |  | false |  |
| logging | <code>Boolean</code> | false | false | Debug logging flag for the SUCCESS responses |
| userContext | <code>String</code> | false | false | Optional parameter. Determines a user context. Default values: 'anonymous' for userId and 'realtime' for realtimeUserId |
| provider | <code>String</code> | false | false | Optional parameter. Determines APNS keys to send notifications. Default value: barchart |

**Example**:

```json
{
  "development": true,
  "deviceID": "f70211b7d3ac7630567898fb861632f5566a57b59bf2809ddd61b5170e61adfd",
  "bundleID": "com.barchart.ens",
  "realtimeUserID": "CHS-borjatesting30@mailinator.com",
  "userID": "12345678",
  "notification": {
    "title": "Title: Hello from GO",
    "subtitle": "subTitle: This is awesome",
    "body": "Even more Content",
    "category": "alert",
    "data": {}
  },
  "apns": {
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
  },
  "logging": true,
  "userContext": "string",
  "provider": "string"
}
```

#### Responses

**Status Code**: 200

> OK

**One of:**

- [APNSResponse](/content/api/components?id&#x3D;schemasapnsresponse)

* **Response Type:** [<code>Array&lt;FCMResponse&gt;</code>](/content/api/components?id=schemasFCMResponse)


* * *

**Status Code**: 400 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

**Status Code**: 500 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

## POST /v2/register 

> Register a device for notifications with APNS or FCM.

**Summary**: Register Device

**Security**: 
[Jwt](/content/api/components?id=securityJwt)
#### Request Body
**One of:**

- [ApnsRegister](/content/api/components?id&#x3D;schemasapnsregister)

- [FcmRegister](/content/api/components?id&#x3D;schemasfcmregister)


#### Responses

**Status Code**: 200

> Device has been registered.

**One of:**

- [ApnsRegister](/content/api/components?id&#x3D;schemasapnsregister)

- [FcmRegister](/content/api/components?id&#x3D;schemasfcmregister)


* * *

**Status Code**: 400 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

**Status Code**: 403 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

**Status Code**: 500 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

## POST /v2/unregister 

> Unregister a device from receiving push notifications.

**Summary**: Unregister Device

**Security**: 
[Jwt](/content/api/components?id=securityJwt)
#### Request Body
    
**Content Type**: application/json

**Type**: <code>Object</code>

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| device | <code>String</code> | false | false | APNS Token or Firebase IID |
| bundle | <code>String</code> | false | false | An application bundle or package name |
| user | <code>String</code> | false | false | An user ID |
| context | <code>String</code> | false | false | A user context (e.g. barchart) |

**Example**:

```json
{
  "device": "ca1GWEasSt-LfySsUq_qhi",
  "bundle": "com.barchart.ens",
  "user": "12345678",
  "context": "ca1GWEasSt-LfySsUq_qhi"
}
```

#### Responses

**Status Code**: 200

> Device has been registered.

**Content Type**: <code>application/json</code>

**Response Type:** <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| message | <code>String</code> | false | false |  |

**Example**:

```json
{
  "message": "successfully"
}
```

* * *

**Status Code**: 400 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

**Status Code**: 403 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

**Status Code**: 500 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

## POST /v2/send 

> Sends a push notification to devices using APNS and FCM.

**Summary**: Send a push notification

**Security**: 
[JwtAdmin](/content/api/components?id=securityJwtAdmin)
#### Request Body
**One of:**

- [SendByUser](/content/api/components?id&#x3D;schemassendbyuser)

- [SendByDevice](/content/api/components?id&#x3D;schemassendbydevice)

- [SendByBundle](/content/api/components?id&#x3D;schemassendbybundle)


#### Responses

**Status Code**: 200

> A notification has been sent.

**Content Type**: <code>application/json</code>

**Response Type:** <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| id | <code>String</code> | false | false | The Job ID |

**Example**:

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

* * *

**Status Code**: 400 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

**Status Code**: 403 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

**Status Code**: 500 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

## GET /v2/job/{id} 

> Returns information about a job.

**Summary**: Gets information about a job

**Security**: 
[JwtAdmin](/content/api/components?id=securityJwtAdmin)
#### Request Body
**One of:**

- [SendByUser](/content/api/components?id&#x3D;schemassendbyuser)

- [SendByDevice](/content/api/components?id&#x3D;schemassendbydevice)

- [SendByBundle](/content/api/components?id&#x3D;schemassendbybundle)


#### Responses

**Status Code**: 200

> An object with job information.

**Content Type**: <code>application/json</code>

**Response Type:** <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| id | <code>String</code> | false | false | The Job ID |
| status | <code>String</code> | false | false | The Job Status CREATED/DONE/IN_PROGRESS |
| request | <code>String</code> | false | false | The original request |
| scan | <code>Object</code> |  | false |  |
| scan.last | <code>String</code> | false | false | The last scanned device |
| system | <code>Object</code> |  | false |  |
| system.created | <code>Number</code> | false | false | The date the job was created |
| system.updated | <code>Number</code> | false | false | The date the job was updated |
| system.finished | <code>Number</code> | false | false | The date the job was finished |

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

**Status Code**: 404 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

**Status Code**: 500 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

## GET /v2/service/read 

> Returns the service version, name, environment, and description

**Summary**: Returns service data

#### Responses

**Status Code**: 200

> Device has been registered.

**Content Type**: <code>application/json</code>

**Response Type:** <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| service | <code>Object</code> |  | false |  |
| service.name | <code>String</code> | false | false | Service name |
| service.environment | <code>String</code> | false | false | Current environment |
| service.version | <code>String</code> | false | false | Current version of the service |
| service.description | <code>String</code> | false | false | Description of the service |

**Example**:

```json
{
  "service": {
    "name": "serverless-push-gateway",
    "environment": "prod",
    "version": "v1.0.0",
    "description": "Barchart Push Notification Service"
  }
}
```

* * *

