"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controller = require("./controller");

var router = (0, _express.Router)();
//Get a list of payments
router.get("/", _controller.getAll); //Create a payment

router.post("/", _controller.create);
var _default = router;
exports["default"] = _default;