"use strict";

var _express = _interopRequireDefault(require("express"));

var _auth = require("./auth.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/signin", _auth.signin);
router.get("/callback", _auth.callback);
module.exports = router;