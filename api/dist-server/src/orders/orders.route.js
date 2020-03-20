"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _orders = require("./orders.controller");

var _ERP = require("../../ERP");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use(_ERP.refresh);
router.get("/", _orders.getAvailable);
router.post("/", _orders.createOrder);
var _default = router;
exports["default"] = _default;