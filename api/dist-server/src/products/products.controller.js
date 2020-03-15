"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = getAll;
exports.findItem = findItem;
exports.createItem = createItem;
exports["default"] = void 0;

var _index = require("../../ERP/index");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var products = /*#__PURE__*/function () {
  function products() {
    _classCallCheck(this, products);
  }

  _createClass(products, [{
    key: "getAll",
    value: function getAll(req, res) {
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
  }, {
    key: "findItem",
    value: function findItem(req, res) {
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
  }, {
    key: "createItem",
    value: function createItem(req, res) {
      console.log(req.body);
      var _req$body2 = req.body,
          name = _req$body2.name,
          qty = _req$body2.qty,
          description = _req$body2.description,
          unitPrice = _req$body2.unitPrice;

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
  }]);

  return products;
}();

exports["default"] = products;