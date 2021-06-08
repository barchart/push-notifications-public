# API Reference

## Push Notifications: Android (FCM) and iOS (APNs) 0.0.0 {docsify-ignore}
    
> Lambda that register and stores device, token and app ids in dynamo DB.

## OpenAPI Definition {docsify-ignore}

[Download](static/openapi.yaml)

## Contents {docsify-ignore}

* [Servers](#Servers)
* [Components](#Components)
* [Paths](#Paths)

## Servers {docsify-ignore}

* [https://push-notifications.aws.barchart.com](https://push-notifications.aws.barchart.com) 
* [https://push-notifications.stage.aws.barchart.com](https://push-notifications.stage.aws.barchart.com) 

## Components {docsify-ignore}

### Responses 

* [ErrorResponse](/content/api/components?id=responsesErrorResponse)

### Schemas 

* [RAW-FCM-Notification](/content/api/components?id=schemasRAW-FCM-Notification)
* [Simple-Notification](/content/api/components?id=schemasSimple-Notification)
* [Simple-Notification-APNs](/content/api/components?id=schemasSimple-Notification-APNs)
* [RAW-APNs-Notification](/content/api/components?id=schemasRAW-APNs-Notification)
* [User](/content/api/components?id=schemasUser)
* [Apns](/content/api/components?id=schemasApns)
* [Fcm](/content/api/components?id=schemasFcm)
* [ApnsRegister](/content/api/components?id=schemasApnsRegister)
* [FcmRegister](/content/api/components?id=schemasFcmRegister)
* [Notification](/content/api/components?id=schemasNotification)
* [SendByUser](/content/api/components?id=schemasSendByUser)
* [SendByDevice](/content/api/components?id=schemasSendByDevice)
* [SendByBundle](/content/api/components?id=schemasSendByBundle)
* [FCMResponse](/content/api/components?id=schemasFCMResponse)
* [APNSResponse](/content/api/components?id=schemasAPNSResponse)

### Security 

* [JWT](/content/api/components?id=securityJWT)


## Paths {docsify-ignore}

* [POST /v1/fcm/registerDevice](/content/api/paths?id=post-v1fcmregisterDevice)
* [POST /v1/fcm/sendNotification](/content/api/paths?id=post-v1fcmsendNotification)
* [POST /v1/apns/registerDevice](/content/api/paths?id=post-v1apnsregisterDevice)
* [POST /v1/apns/sendNotification](/content/api/paths?id=post-v1apnssendNotification)
* [POST /v2/register](/content/api/paths?id=post-v2register)
* [POST /v2/unregister](/content/api/paths?id=post-v2unregister)
* [POST /v2/send](/content/api/paths?id=post-v2send)
* [GET /v2/service/read](/content/api/paths?id=get-v2serviceread)
