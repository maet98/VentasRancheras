"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _index = require("../db/index");

var _stop = _interopRequireDefault(require("./stop"));

var route = _index.db.define('route', {
  id: {
    primaryKey: true,
    type: _sequelize.INTEGER,
    autoIncrement: true
  },
  user: {
    type: _sequelize.INTEGER
  }
});

var _default = route;
exports["default"] = _default;