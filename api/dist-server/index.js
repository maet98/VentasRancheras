"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _auth = require("./src/auth/auth.controller");

var _client = _interopRequireDefault(require("./src/client/client.route"));

var _orders = _interopRequireDefault(require("./src/orders/orders.route"));

var _products = _interopRequireDefault(require("./src/products/products.route"));

var _auth2 = _interopRequireDefault(require("./src/auth/auth.route"));

var _route = _interopRequireDefault(require("./src/payment/route"));

var _router = _interopRequireDefault(require("./src/route/router"));

var _db = require("./src/db");

var _router2 = _interopRequireDefault(require("./src/employee/router"));

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _morgan["default"])('dev'));
app.use((0, _cookieParser["default"])());
app.use('/client', _client["default"]);
app.use('/order', _orders["default"]);
app.use('/product', _products["default"]);
app.get('/callback', _auth.callback);
app.use('/auth', _auth2["default"]);
app.use('/payment', _route["default"]);
app.use('/route', _router["default"]);
app.use('/employee', _router2["default"]);
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Connected to port: ".concat(port));
});