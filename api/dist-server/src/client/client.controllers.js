"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = getAll;
exports.getOne = getOne;
exports.createOne = createOne;
exports.filterName = filterName;

var _index = require("../../ERP/index");

function getAll(req, res) {
  _index.qbo.findCustomers({
    fetchAll: true
  }, function (err, ans) {
    if (err) {
      return res.json(err);
    }

    res.json(ans.QueryResponse.Customer);
  });
}

function getOne(req, res) {
  _index.qbo.getCustomer(req.param.id, function (err, customer) {
    if (err) {
      return res.json({
        message: err
      });
    }

    return res.json(customer);
  });
}

function createOne(req, res) {
  var _req$body = req.body,
      DisplayName = _req$body.DisplayName,
      PrimaryEmailAddr = _req$body.PrimaryEmailAddr,
      PrimaryPhone = _req$body.PrimaryPhone,
      CompanyName = _req$body.CompanyName;

  _index.qbo.createCustomer({
    DisplayName: DisplayName,
    PrimaryEmailAddr: PrimaryEmailAddr,
    PrimaryPhone: PrimaryPhone,
    CompanyName: CompanyName
  }, function (err, customer) {
    if (err) {
      return res.json({
        message: err
      });
    }

    return res.json(customer);
  });
}

function filterName(req, res) {
  var name = req.params.name;
  name = '%' + name + '%';

  _index.qbo.findCustomers([{
    field: 'fetchAll',
    value: true
  }, {
    field: 'DisplayName',
    value: name,
    operator: 'LIKE'
  }], function (err, custormes) {
    if (err) {
      return res.status(400).json(err);
    }

    res.json(custormes.QueryResponse);
  });
}