"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callback = callback;
exports.signin = signin;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _intuitOauth = _interopRequireDefault(require("intuit-oauth"));

var _config = _interopRequireDefault(require("config"));

var _token = require("../models/token");

var _index = _interopRequireDefault(require("../../ERP/index"));

var con = _config["default"].get('quickbooks');

var oauthClient = new _intuitOauth["default"]({
  clientId: con.get("clientId"),
  clientSecret: con.get("clientSecret"),
  enviroment: 'sandbox' || 'prodcution',
  redirectUri: 'http://localhost:3000/callback'
});
var _default = oauthClient;
exports["default"] = _default;

function callback(_x, _x2, _x3) {
  return _callback.apply(this, arguments);
}

function _callback() {
  _callback = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return initializeQbo(req.url, req.query.realmId);

          case 2:
            res.send({
              ok: true
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _callback.apply(this, arguments);
}

var initializeQbo = function initializeQbo(url, realmId) {
  return new Promise(function (resolve) {
    oauthClient.createToken(url).then(function (authResponse) {
      var info = authResponse.getJson();

      _index["default"].setRealmId(realmId);

      _index["default"].setRefreshToken(info.refresh_token);

      _index["default"].setAccessToken(info.access_token);

      resolve();
    });
  });
};

function signin(req, res, next) {
  if (!oauthClient.isAccessTokenValid()) {
    if (oauthClient.token.access_token === '') {
      var authUri = oauthClient.authorizeUri({
        scope: [_intuitOauth["default"].scopes.Accounting, _intuitOauth["default"].scopes.OpenId],
        state: 'testState'
      });
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