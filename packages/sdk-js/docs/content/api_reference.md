# API Reference

## Barchart Push Notification Service v2.3.1 {docsify-ignore}
    
> Register and unregister Android and iOS devices; send mobile push notifications to those devices (via APNs and FCM).

## OpenAPI Definition {docsify-ignore}

[Download](static/openapi_v2.yaml)

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

* [User](/content/api/components?id=schemasUser)
* [ApnsDevice](/content/api/components?id=schemasApnsDevice)
* [FcmDevice](/content/api/components?id=schemasFcmDevice)
* [ApnsRegistration](/content/api/components?id=schemasApnsRegistration)
* [FcmRegistration](/content/api/components?id=schemasFcmRegistration)
* [UnregisterRequest](/content/api/components?id=schemasUnregisterRequest)
* [NotificationForUser](/content/api/components?id=schemasNotificationForUser)
* [NotificationForDevice](/content/api/components?id=schemasNotificationForDevice)
* [NotificationnForBundle](/content/api/components?id=schemasNotificationnForBundle)
* [NotificationContent](/content/api/components?id=schemasNotificationContent)
* [JobInfo](/content/api/components?id=schemasJobInfo)

### Security 

* [Jwt-Consumer](/content/api/components?id=securityJwt-Consumer)
* [Jwt-Admin](/content/api/components?id=securityJwt-Admin)


## Paths {docsify-ignore}

* [POST /v2/register](/content/api/paths?id=post-v2register)
* [POST /v2/unregister](/content/api/paths?id=post-v2unregister)
* [POST /v2/send](/content/api/paths?id=post-v2send)
* [GET /v2/job/{id}](/content/api/paths?id=get-v2jobid)
* [GET /v2/service/read](/content/api/paths?id=get-v2serviceread)
