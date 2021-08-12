require("isomorphic-fetch");

const { Client } = require("@microsoft/microsoft-graph-client");
const { TokenCredentialAuthenticationProvider } = require("@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials");
const { ClientSecretCredential } = require("@azure/identity");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  
class MSGraphConnector {
    constructor (tenantId, clientId, clientSecret, scopes) {
        try {            
            const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
            const authProvider = new TokenCredentialAuthenticationProvider(credential, { scopes: [scopes] });
            this.client = Client.initWithMiddleware({
                debugLogging: true,
                authProvider,
            });            
        } catch (error) {
            throw new Error(`Error initializing the ms graph client: ${error}`);
        }
    }
}

module.exports = {
    MSGraphConnector: MSGraphConnector
};