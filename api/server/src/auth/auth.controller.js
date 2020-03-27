import oauth from "intuit-oauth";
import config from "config";
import {token} from "../models/token";
import QBO from "../../ERP/index";

var con = config.get('quickbooks');

const oauthClient = new oauth({
    clientId: con.get("clientId"),
    clientSecret:con.get("clientSecret"),
    enviroment: 'sandbox' || 'prodcution',
    redirectUri: 'http://localhost:3000/callback'
})

export default oauthClient;

export async function callback(req, res, next){
    await initializeQbo(req.url, req.query.realmId);
    res.send({ok: true});
}

const initializeQbo = (url, realmId) => {
    return new Promise(resolve => {
        oauthClient.createToken(url).then(authResponse => {
            const info = authResponse.getJson();
            QBO.setRealmId(realmId);
            QBO.setRefreshToken(info.refresh_token);
            QBO.setAccessToken(info.access_token);
            resolve();
        });
    });
};


export function signin(req,res, next){
    if(!oauthClient.isAccessTokenValid()){
        if(oauthClient.token.access_token === ''){
            var authUri = oauthClient.authorizeUri(
                {scope:[oauth.scopes.Accounting,oauth.scopes.OpenId],
                    state:'testState'});  
            return res.redirect(authUri);
        }
        oauthClient.refresh()
        .then( (authResponse) =>{
            console.log("Token refreshed: "+ authResponse);
            next();
        })
        .catch((e) =>{
            return res.status(400).json(e);
        })
    }
    else{
        next();
    }
}