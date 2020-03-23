"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _ERP = require("../../ERP");

var _controller = require("./controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/stop", _controller.getStop);
router.get("/", _controller.getRoute);
router.post("/", _controller.createRoute);
var _default = router;
exports["default"] = _default;