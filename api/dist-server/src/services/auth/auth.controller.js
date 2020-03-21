"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callback = callback;
exports.signin = signin;
exports["default"] = void 0;

var _intuitOauth = _interopRequireDefault(require("intuit-oauth"));

var _config = _interopRequireDefault(require("config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var con = _config["default"].get('quickbooks');

var oauthClient = new _intuitOauth["default"]({
  clientId: con.get("clientId"),
  clientSecret: con.get("clientSecret"),
  enviroment: 'sandbox' || 'prodcution',
  redirectUri: 'http://localhost:3000/callback'
});
var _default = oauthClient;
exports["default"] = _default;

function callback(req, res, next) {
  var parseRedirect = req.url;
  oauthClient.createToken(parseRedirect).then(function (authResponse) {})["catch"](function (e) {
    console.error(e.intuit_tid);
    res.status(400).json(e);
  });
}

function signin(req, res, next) {
  if (!oauthClient.isAccessTokenValid()) {
    if (oauthClient.token.access_token === '') {
      var authUri = oauthClient.authorizeUri({
        scope: [_intuitOauth["default"].scopes.Accounting, _intuitOauth["default"].scopes.OpenId],
        state: 'testState'
      }); // can be an array of multiple scopes ex : {scope:[OAuthClient.scopes.Accounting,OAuthClient.scopes.OpenId]}

      return res.redirect(authUri);
    }

    oauthClient.refresh().then(function (authResponse) {
      console.log("Token refreshed: " + authResponse);
      next();
    })["catch"](function (e) {
      return res.status(400).json(e);
    });
  } else {
    next();
  }
}