"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _client = require("./client.controllers");

var router = _express["default"].Router();

router.get('/', _client.getAll);
router.post('/', _client.createOne);
router.get('/:name', _client.filterName);
var _default = router;
exports["default"] = _default;