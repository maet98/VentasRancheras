"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _config = _interopRequireDefault(require("config"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Quickbooks = require("node-quickbooks");

var OAuthClient = require("intuit-oauth");

var quickBooks = _config["default"].get("quickbooks");

var clientID = quickBooks.get("clientId");
var clientSecret = quickBooks.get("clientSecret");
var url = quickBooks.get("url");

var TokenCacheManager = require("../ERP/ctoken");

var EXPIRATION_TIME = 3600;
var EXPIRATION_TIME_REFRESH = 8600000;
var accessToken = null;
var _refreshToken = null;
var realmId = null;
var oauthClient = new OAuthClient({
  clientId: clientID,
  clientSecret: clientSecret,
  environment: "sandbox",
  redirectUri: "".concat(url, "/callback")
});

var QBOAuth = /*#__PURE__*/function () {
  function QBOAuth() {
    (0, _classCallCheck2["default"])(this, QBOAuth);
  }

  (0, _createClass2["default"])(QBOAuth, null, [{
    key: "setAccessToken",

    /**
     * Sets the access token for the OAuthClient.
     * @param {string} token access token
     * @param {object} [cachedToken=null] if passed this will be used instead.
     */
    value: function setAccessToken(token) {
      var cachedToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var accessTokenParams;

      if (!cachedToken) {
        accessTokenParams = {
          token_type: "bearer",
          access_token: token,
          expires_in: EXPIRATION_TIME,
          refresh_token: _refreshToken,
          x_refresh_token_expires_in: EXPIRATION_TIME_REFRESH,
          createdAt: new Date().getTime()
        };
        TokenCacheManager.save(_objectSpread({}, accessTokenParams, {
          realmId: realmId
        }));
      }

      oauthClient.setToken(cachedToken || accessTokenParams);
      accessToken = token || cachedToken.access_token;
    }
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(token) {
      _refreshToken = token;
    }
  }, {
    key: "setRealmId",
    value: function setRealmId(newRealmId) {
      realmId = newRealmId;
    }
    /**
     * Returns a valid node-quickbooks that can make API calls.
     * If the access token is expired it will be refresed before building
     * the node-quickbooks object.
     */

  }, {
    key: "getQbo",
    value: function () {
      var _getQbo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var qbo;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (oauthClient.isAccessTokenValid()) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return this.refreshToken();

              case 3:
                qbo = this.buildQbo();
                return _context.abrupt("return", qbo);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getQbo() {
        return _getQbo.apply(this, arguments);
      }

      return getQbo;
    }()
    /**
     * Builds a node-quickbooks object.
     */

  }, {
    key: "buildQbo",
    value: function buildQbo() {
      var qbo = new Quickbooks(clientID, clientSecret, accessToken, false, // no token secret for oAuth 2.0,
      realmId, true, // use sandbox
      false, // enableDebuggingm
      null, //  set minorversion, or null for the latest version
      "2.0", // oAuth version
      _refreshToken);
      return qbo;
    }
    /**
     * Refreshes the access token.
     */

  }, {
    key: "refreshToken",
    value: function refreshToken() {
      var _this = this;

      var oauthClientCopy = oauthClient;
      return new Promise(function (resolve, reject) {
        oauthClientCopy.refreshUsingToken(_refreshToken).then(function (authResponse) {
          _this.setRefreshToken(authResponse.json.refresh_token);

          _this.setAccessToken(authResponse.json.access_token);

          resolve(authResponse.json.access_token);
        })["catch"](function (e) {
          reject(e);
        });
      });
    }
  }, {
    key: "getOAuthClient",
    value: function getOAuthClient() {
      return oauthClient;
    }
  }]);
  return QBOAuth;
}();

module.exports = QBOAuth;