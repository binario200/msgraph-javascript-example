/* eslint-disable no-useless-catch */

/* eslint-disable no-undef */
const sinon = require('sinon');
const chai = require('chai');
const { MSGraphConnector } = require('../index');

const tenantId = 'YOUR_SP_TENANT_ID';
const clientId = 'YOUR_SP_CLIENT_ID';
const clientSecret = 'YOUR_SP_CLIENT_SECRET_ID';
const scopes = 'https://graph.microsoft.com/.default'

const { expect } = chai;

afterEach(() => {
    sinon.restore();
});

describe('# MSGraphConnector', () => {
    describe('## ms graph client initialization', () => {
        try {
            const connector = new MSGraphConnector(tenantId, clientId, clientSecret, scopes);

            connector.client
                .api("/servicePrincipals")
                .select("displayName", "appId")
                .get()
                .then((spNames) => {
                    console.log(spNames);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    });

});