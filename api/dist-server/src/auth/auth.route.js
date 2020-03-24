"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _auth = require("./auth.controller");

var _controller = require("../employee/controller");

var router = _express["default"].Router();

router.get("/signin", _auth.signin);
router.get("/callback", _auth.callback);
router.post("/login", _controller.login);
module.exports = router;