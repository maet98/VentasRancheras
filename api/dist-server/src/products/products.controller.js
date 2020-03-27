"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = getAll;
exports.findItem = findItem;
exports.createItem = createItem;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _index = _interopRequireDefault(require("../../ERP/index"));

function getAll(_x, _x2) {
  return _getAll.apply(this, arguments);
}

function _getAll() {
  _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var qbo;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _index["default"].getQbo();

          case 2:
            qbo = _context.sent;
            qbo.findItems({
              fetchAll: true
            }, function (err, item) {
              if (err) {
                res.json({
                  message: err
                });
              }

              res.json(item.QueryResponse);
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAll.apply(this, arguments);
}

function findItem(_x3, _x4) {
  return _findItem.apply(this, arguments);
}

function _findItem() {
  _findItem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var qbo, name;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _index["default"].getQbo();

          case 2:
            qbo = _context2.sent;
            name = req.params.name;
            name = '%' + name + '%';
            qbo.findItems([{
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

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _findItem.apply(this, arguments);
}

function createItem(_x5, _x6) {
  return _createItem.apply(this, arguments);
}

function _createItem() {
  _createItem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var qbo, _req$body, name, qty, description, unitPrice;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _index["default"].getQbo();

          case 2:
            qbo = _context3.sent;
            _req$body = req.body, name = _req$body.name, qty = _req$body.qty, description = _req$body.description, unitPrice = _req$body.unitPrice;
            qbo.createItem({
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

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _createItem.apply(this, arguments);
}