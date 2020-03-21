"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = getAll;
exports.create = create;

var _index = require("../../ERP/index");

function getAll(req, res) {
  _index.qbo.findPayments({
    fetchAll: true
  }, function (err, payments) {
    if (err) {
      return res.json(err);
    }

    res.json(payments.QueryResponse);
  });
}

function create(req, res) {
  _index.qbo.createPayment(req.body, function (err, payment) {
    if (err) {
      return res.status(400).json(err);
    }

    res.json(payment.QueryResponse);
  });
}