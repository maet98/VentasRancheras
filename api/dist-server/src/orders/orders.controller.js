"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrder = createOrder;
exports.getAvailable = getAvailable;

var _index = require("../../ERP/index");

function createOrder(req, res) {
  _index.qbo.createEstimate({
    fetchAll: true
  }, function (err, estimate) {
    if (err) {
      res.json({
        error: err
      });
    }

    res.json(estimate);
  });
}

function getAvailable(req, res) {
  _index.qbo.findEstimates({
    fetchAll: true
  }, function (err, estimate) {
    if (err) {
      res.json({
        error: err
      });
    }

    res.json(estimate.QueryResponse);
  });
}