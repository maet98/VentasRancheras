"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _orders = require("./orders.controller");

var router = _express["default"].Router();

router.get("/", _orders.getAll);
router.post("/", _orders.createOrder);
router.get("/available", _orders.getAvailableOrders);
router.get("/:CustomerId", _orders.getOrdersByClientId);
var _default = router;
exports["default"] = _default;