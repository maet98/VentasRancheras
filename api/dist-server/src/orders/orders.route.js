"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _orders = require("./orders.controller");

var router = _express["default"].Router();

router.get("/", _orders.getAvailable);
router.post("/", _orders.createOrder);
var _default = router;
exports["default"] = _default;