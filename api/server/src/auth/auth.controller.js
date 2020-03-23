import oauth from "intuit-oauth";
import config from "config";
import {token} from "../models/token";

var con = config.get('quickbooks');

const oauthClient = new oauth({
    clientId: con.get("clientId"),
    clientSecret:con.get("clientSecret"),
    enviroment: 'sandbox' || 'prodcution',
    redirectUri: 'http://localhost:3000/callback'
})

export default oauthClient;

export function callback(req, res, next){
    var parseRedirect = req.url;
    
    oauthClient.createToken(parseRedirect)
    .then(function(authResponse) {
        token.create(authResponse.token)
        .then((ans) => {
            res.json(ans);
        })
        .catch(err =>{
            res.status(400).json(err);
        })
    })
    .catch(function(e) {
        console.error(e.intuit_tid);
        res.status(400).json(e);
    });
}

export function signin(req,res, next){
    if(!oauthClient.isAccessTokenValid()){
        if(oauthClient.token.access_token === ''){
            var authUri = oauthClient.authorizeUri({scope:[oauth.scopes.Accounting,oauth.scopes.OpenId],state:'testState'});  // can be an array of multiple scopes ex : {scope:[OAuthClient.scopes.Accounting,OAuthClient.scopes.OpenId]}
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