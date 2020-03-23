"use strict";

var _sequelize = require("sequelize");

var _index = require("../db/index");

var _stop = require("./stop");

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

route.hasMany(_stop.stop, {
  as: 'stops'
});
module.exports = route;