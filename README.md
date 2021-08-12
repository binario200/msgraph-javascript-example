# Connecting and querying to Microsoft Graph with javascript
This small npm module helps to understand how to connect to [Microsoft Graph API](https://docs.microsoft.com/en-us/graph/overview?view=graph-rest-1.0) using [Microsoft Graph nmp module](https://www.npmjs.com/package/@microsoft/microsoft-graph-client/v/3.0.0-Preview.1) to query azure active directory Service Principals.

# Requeriments
- Node
- [An Azure AD Service Principal](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal) (and its tenantId, clientId and SecretId)
- Configure Service principal's App registration [API permissions](https://markwarneke.me/2020-04-02-Clone-AzureAd-Service-Principal/#api-permissions)

# Getting started
- Set your Service Principal info at the test/index.test.js
- `npm install`
- `npm test`

# Connection and querying Microsoft Graph code 
As you can see at MSGraphConnector the connection is configured
Once that the Microsoft Graph client is configured you can used to query the MS Graph API. Like is shown at test/index.test.js to query Service principal information, you can find another info and/or operations at the [Microsoft Graph API SDk](https://docs.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0)