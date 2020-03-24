"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _config = _interopRequireDefault(require("config"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var enviroment = process.env.NODE_ENV;

var database = _config["default"].get(enviroment).get("database");

var username = _config["default"].get(enviroment).get("username");

var password = _config["default"].get(enviroment).get("password");

var dialect = _config["default"].get(enviroment).get("dialect");

var host = _config["default"].get(enviroment).get("host");

var db = new _sequelize["default"](database, username, password, {
  host: host,
  dialect: dialect
});
exports.db = db;