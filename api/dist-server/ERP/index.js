"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refresh = refresh;
exports.qbo = void 0;

var _nodeQuickbooks = _interopRequireDefault(require("node-quickbooks"));

var _config = _interopRequireDefault(require("config"));

var _auth = require("../src/auth/auth.controller");

var _token = require("./token");

var token = (0, _token.getToken)();
console.log(token);

var quickbooks = _config["default"].get("quickbooks");

var token = quickbooks.get("token");
var refreshToken = quickbooks.get("refresh");
var clientId = quickbooks.get("clientId");
var clientSecret = quickbooks.get("clientSecret");
var realmId = quickbooks.get("realmId");
var qbo = new _nodeQuickbooks["default"](clientId, clientSecret, token, false, // no token secret for oAuth 2.0
realmId, true, // use the sandbox?
true, // enable debugging?
null, // set minorversion, or null for the latest version
'2.0', refreshToken);
exports.qbo = qbo;

function refresh(req, res, next) {
  qbo.refreshAccessToken(function (err) {
    if (err) {
      return res.redirect("http://localhost:".concat(process.env.PORT || 3000, "/auth/signin"));
    } else {
      next();
    }
  });
}