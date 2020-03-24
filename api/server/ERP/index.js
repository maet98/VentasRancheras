import qb from "node-quickbooks";
import config from "config";
import {oauth}from "../src/auth/auth.controller";
import { Token,getToken } from "./token";

var token = getToken();
console.log(token);
var quickbooks = config.get("quickbooks");
var token = quickbooks.get("token");
var refreshToken = quickbooks.get("refresh");
var clientId = quickbooks.get("clientId");
var clientSecret = quickbooks.get("clientSecret");
var realmId = quickbooks.get("realmId");

export const qbo = new qb(
    clientId,
    clientSecret,
    token,
    false, // no token secret for oAuth 2.0
    realmId,
    true, // use the sandbox?
    true, // enable debugging?
    null, // set minorversion, or null for the latest version
    '2.0',
    refreshToken);

export function refresh(req,res,next){
    qbo.refreshAccessToken((err) =>{
        if(err){
            return res.redirect(`http://localhost:${process.env.PORT || 3000}/auth/signin`);
        }
        else{
            next();
        }
    })
}