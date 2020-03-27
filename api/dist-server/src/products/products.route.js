"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var express = _interopRequireWildcard(require("express"));

var _products = require("./products.controller");

var router = express.Router();
router.get('', _products.getAll);
router.get('/:name', _products.findItem);
router.post('', _products.createItem);
var _default = router;
exports["default"] = _default;