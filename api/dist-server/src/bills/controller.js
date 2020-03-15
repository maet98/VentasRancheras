"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = getAll;

var _index = require("../../ERP/index");

function getAll(req, res) {
  _index.qbo.findBills({
    fetchAll: true
  }, function (err, bills) {
    if (err) {
      return res.json(err);
    }

    res.json(bills.QueryResponse);
  });
}