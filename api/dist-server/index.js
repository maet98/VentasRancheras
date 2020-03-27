"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _ctoken = _interopRequireWildcard(require("./ERP/ctoken"));

var _auth = require("./src/auth/auth.controller");

var _client = _interopRequireDefault(require("./src/client/client.route"));

var _orders = _interopRequireDefault(require("./src/orders/orders.route"));

var _products = _interopRequireDefault(require("./src/products/products.route"));

var _auth2 = _interopRequireDefault(require("./src/auth/auth.route"));

var _route = _interopRequireDefault(require("./src/payment/route"));

var _router = _interopRequireDefault(require("./src/route/router"));

var _router2 = _interopRequireDefault(require("./src/employee/router"));

var app = (0, _express["default"])();

var QBO = require("./ERP/index");

var loadToken = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = _ctoken["default"].get();

            if (token) {
              QBO.setRealmId(token.realmId);
              QBO.setRefreshToken(token.refresh_token);
              QBO.setAccessToken(null, token);
            }

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadToken() {
    return _ref.apply(this, arguments);
  };
}();

var port = process.env.PORT || 3000;

var main = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return loadToken();

          case 2:
            app.use(_express["default"].json());
            app.use(_express["default"].urlencoded({
              extended: true
            }));
            app.use((0, _morgan["default"])('dev'));
            app.use((0, _cookieParser["default"])());
            app.use((0, _cors["default"])());
            app.listen(port);
            app.use('/client', _client["default"]);
            app.use('/order', _orders["default"]);
            app.use('/product', _products["default"]);
            app.get('/callback', _auth.callback);
            app.use('/auth', _auth2["default"]);
            app.use('/payment', _route["default"]);
            app.use('/route', _router["default"]);
            app.use('/employee', _router2["default"]);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function main() {
    return _ref2.apply(this, arguments);
  };
}();

main();