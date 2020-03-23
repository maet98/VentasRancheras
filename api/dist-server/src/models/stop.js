"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stop = void 0;

var _sequelize = require("sequelize");

var _index = require("../db/index");

var stop = _index.db.define('stop', {
  id: {
    primaryKey: true,
    type: _sequelize.INTEGER,
    autoIncrement: true
  },
  client: {
    type: _sequelize.INTEGER
  },
  priority: {
    type: _sequelize.INTEGER
  },
  name: {
    type: _sequelize.STRING
  },
  longitude: {
    type: _sequelize.INTEGER
  },
  latitude: {
    type: _sequelize.INTEGER
  }
});

exports.stop = stop;