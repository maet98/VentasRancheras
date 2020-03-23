"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = getAll;
exports.findItem = findItem;
exports.createItem = createItem;

var _index = require("../../ERP/index");

function getAll(req, res) {
  _index.qbo.findItems({
    fetchAll: true
  }, function (err, item) {
    if (err) {
      res.json({
        message: err
      });
    }

    res.json(item.QueryResponse);
  });
}

function findItem(req, res) {
  var name = req.params.name;
  name = '%' + name + '%';

  _index.qbo.findItems([{
    field: 'fetchAll',
    value: true
  }, {
    field: 'Name',
    value: name,
    operator: 'LIKE'
  }], function (err, items) {
    if (err) {
      console.log(err);
      return res.status(400).json(err);
    }

    res.json(items.QueryResponse);
  });
}

function createItem(req, res) {
  console.log(req.body);
  var _req$body = req.body,
      name = _req$body.name,
      qty = _req$body.qty,
      description = _req$body.description,
      unitPrice = _req$body.unitPrice;

  _index.qbo.createItem({
    name: name,
    UnitPrice: unitPrice,
    QtyOnHand: qty,
    description: description
  }, function (err, item) {
    if (err) {
      return res.json(err);
    }

    res.json(item.QueryResponse);
  });
}