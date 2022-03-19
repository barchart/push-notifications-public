# Paths

## POST /v2/register 

> Register a device for notifications with APNs or FCM.

**Summary**: Register Device

**Security**: 
[Jwt-Consumer](/content/api/components?id=securityJwt-Consumer)
#### Request Body
**One of:**

- [RegisterRequestForApns](/content/api/components?id&#x3D;schemasregisterrequestforapns)

- [RegisterRequestForFcm](/content/api/components?id&#x3D;schemasregisterrequestforfcm)


#### Responses

**Status Code**: 200

> Device has been registered.

**One of:**

- [RegisterRequestForApns](/content/api/components?id&#x3D;schemasregisterrequestforapns)

- [RegisterRequestForFcm](/content/api/components?id&#x3D;schemasregisterrequestforfcm)


* * *

**Status Code**: 400 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

**Status Code**: 403 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

**Status Code**: 500 - [ErrorResponse](/content/api/components?id=responseserrorresponse)

* * *

## POST /v2/unregister 

> Deletes registrations for a device.

**Summary**: Unregister Device

**Security**: 
[Jwt-Consumer](/content/api/components?id=securityJwt-Consumer)
#### Request Body

**Content Type**: application/json

**Type**: [<code>UnregisterRequest</code>](/content/api/components?id=schemasUnregisterRequest)

**Example**:

```json
{
  "device": "ca1GWEasSt-LfySsUq_qhi",
  "bundle": "com.barchart.ens",
  "user": "abc-12345678",
  "context": "my-company"
}
```

#### Responses

**Status Code**: 200

> Device has been unregistered.

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

> Starts a job to transmit push notification(s) via APNs and/or FCM.

**Summary**: Send push notification(s)

**Security**: 
[Jwt-Admin](/content/api/components?id=securityJwt-Admin)
#### Request Body
**One of:**

- [NotificationRequestForUser](/content/api/components?id&#x3D;schemasnotificationrequestforuser)

- [NotificationRequestForDevice](/content/api/components?id&#x3D;schemasnotificationrequestfordevice)

- [NotificationRequestForBundle](/content/api/components?id&#x3D;schemasnotificationrequestforbundle)


#### Responses

**Status Code**: 200

> The notification has been scheduled for transmission.

**Content Type**: <code>application/json</code>

**Response Type:** <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| id | <code>String</code> | false | false | The identifier of the job responsible for sending the push notification. |

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

> Retrieves status of a job to send notification(s).

**Summary**: Retrieves status of a job to send notification(s).

**Security**: 
[Jwt-Admin](/content/api/components?id=securityJwt-Admin)
#### Path Parameters

| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| id | <code>String</code> | true | false | The identifier of the job to query. |

#### Responses

**Status Code**: 200

> An object with job information.

**Content Type**: <code>application/json</code>

**Response Type:** [<code>JobInfo</code>](/content/api/components?id=schemasJobInfo)

**Example**:

```
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

> Retrieves the version of the Barchart Push Notification Service and other metadata.

**Summary**: Retrieves metadata regarding the Barchart Push Notification Service.

#### Responses

**Status Code**: 200

> Version of the Barchart Push Notification Service and other metadata.

**Content Type**: <code>application/json</code>

**Response Type:** <code>Object</code>
    
| Name | Type | Required | Nullable | Description |
| ---- | ---- | -------- | -------- | ----------- |
| service | <code>Object</code> | false | false |  |
| service.name | <code>String</code> | false | false | The name of the remote service. |
| service.environment | <code>String</code> | false | false | The name of the enviroment (e.g. stage or prod). |
| service.version | <code>String</code> | false | false | The version of the remote service. |
| service.description | <code>String</code> | false | false | A description of the remote service. |

**Example**:

```json
{
  "service": {
    "name": "serverless-push-gateway",
    "environment": "prod",
    "version": "v2.3.0",
    "description": "Barchart Push Notification Service"
  }
}
```

* * *

