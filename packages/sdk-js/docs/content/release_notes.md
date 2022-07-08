# Release Notes

## 1.2.0
**New Features**

* Updated `PushNotificationGateway.registerDevice` to use new `POST` endpoint at `/v2/registeristratons`.
* Updated `PushNotificationGateway.unregisterDevice` to use new `DELETE` endpoint at `/v2/registeristratons`. 

**Other**

* Updated documentation to reflect API endpoint rename from `/v2/register` to `/v2/registrations`.

## 1.1.0
**New Features**

* Updated `PushNotificationGateway.unregisterDevice` to use new `DELETE` endpoint at `/v2/register`.
* Updated OpenAPI definition file to reflect addition of new `DELETE` endpoint at `/v2/register`.
* Updated `PushNotificationGateway.unregisterDevice` to accept `FcmRegistration` and `ApnsRegistration` objects.
* Updated `PushNotificationGateway.registerDevice` to accept optional `preserve` parameter.
* Updated the OpenAPI definition file for `/v2/register` endpoint to include optional `preserve` query string parameter.

**Other**

* Removed the `POST` endpoint at `/v2/unregister` from OpenAPI documentation (this endpoint does not follow REST conventions). However, the endpoint still exists (it's now undocumented).
* Updated other aspects of documentation.

## 1.0.5
**Other**

* Improved, extended, and clarified documentation.

## 1.0.4
**Other**

* Updated OpenAPI definition file, making significant adjustments, corrections, and clarifications.
* Updated OpenAPI definition file, removing all references to the ```v1``` of the API, which has been deprecated.

## 1.0.3
**Other**

* Updated documentation.

## 1.0.2
**Other**

* Updated documentation.

## 1.0.1
**Technical Enhancements**

* Integrated project with AWS CodeBuild.

## 1.0.0
**Initial Release**
