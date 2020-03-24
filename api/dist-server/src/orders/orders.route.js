"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _orders = require("./orders.controller");

var _ERP = require("../../ERP");

var router = _express["default"].Router();

router.use(_ERP.refresh);
router.get("/", _orders.getAvailable);
router.post("/", _orders.createOrder);
var _default = router;
exports["default"] = _default;