"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _ERP = require("../../ERP");

var _controller = require("./controller");

var router = _express["default"].Router();

router.get("/stop", _controller.getStop);
router.get("/:userId", _controller.getRouteByUser);
router.get("/", _controller.getRoute);
router.post("/", _controller.createRoute);
var _default = router;
exports["default"] = _default;