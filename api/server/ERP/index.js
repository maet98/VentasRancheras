const Quickbooks = require("node-quickbooks");
const OAuthClient = require("intuit-oauth");

import config from "config"

const quickBooks = config.get("quickbooks");
const clientID = quickBooks.get("clientId");
const clientSecret = quickBooks.get("clientSecret");
const url = quickBooks.get("url");

const TokenCacheManager = require("../ERP/ctoken");

const EXPIRATION_TIME = 3600; 
const EXPIRATION_TIME_REFRESH = 8600000; 

let accessToken = null;
let refreshToken = null;
let realmId = null;
const oauthClient = new OAuthClient({
    clientId: clientID,
    clientSecret,
    environment: "sandbox",
    redirectUri: `${url}/callback`,
});

class QBOAuth {
    /**
     * Sets the access token for the OAuthClient.
     * @param {string} token access token
     * @param {object} [cachedToken=null] if passed this will be used instead.
     */
    static setAccessToken(token, cachedToken = null) {
        let accessTokenParams;
        if (!cachedToken) {
            accessTokenParams = {
                token_type: "bearer",
                access_token: token,
                expires_in: EXPIRATION_TIME,
                refresh_token: refreshToken,
                x_refresh_token_expires_in: EXPIRATION_TIME_REFRESH,
                createdAt: new Date().getTime(),
            };
            TokenCacheManager.save({ ...accessTokenParams, realmId });
        }
        oauthClient.setToken(cachedToken || accessTokenParams);
        accessToken = token || cachedToken.access_token;
    }

    static setRefreshToken(token) {
        refreshToken = token;
    }

    static setRealmId(newRealmId) {
        realmId = newRealmId;
    }

    /**
     * Returns a valid node-quickbooks that can make API calls.
     * If the access token is expired it will be refresed before building
     * the node-quickbooks object.
     */
    static async getQbo() {
        if (!oauthClient.isAccessTokenValid()) {
            await this.refreshToken();
        }
        const qbo = this.buildQbo();
        return qbo;
    }

    /**
     * Builds a node-quickbooks object.
     */
    static buildQbo() {
        const qbo = new Quickbooks(
            clientID,
            clientSecret,
            accessToken,
            false, // no token secret for oAuth 2.0,
            realmId,
            true, // use sandbox
            false, // enableDebuggingm
            null, //  set minorversion, or null for the latest version
            "2.0", // oAuth version
            refreshToken
        );

        return qbo;
    }

    /**
     * Refreshes the access token.
     */
    static refreshToken() {
        const oauthClientCopy = oauthClient;
        return new Promise((resolve, reject) => {
            oauthClientCopy
                .refreshUsingToken(refreshToken)
                .then(authResponse => {
                    this.setRefreshToken(authResponse.json.refresh_token);
                    this.setAccessToken(authResponse.json.access_token);
                    resolve(authResponse.json.access_token);
                })
                .catch(e => {
                    reject(e);
                });
        });
    }

    static getOAuthClient() {
        return oauthClient;
    }
}

module.exports = QBOAuth;
