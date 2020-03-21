"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _client = require("./client.controllers");

var _index = require("../../ERP/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use(_index.refresh);
router.get('/', _client.getAll);
router.post('/', _client.createOne);
router.get('/:name', _client.filterName);
var _default = router;
exports["default"] = _default;