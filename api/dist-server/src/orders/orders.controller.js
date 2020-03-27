"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrder = createOrder;
exports.getAvailable = getAvailable;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var QBO = require("../../ERP/index");

function createOrder(_x, _x2) {
  return _createOrder.apply(this, arguments);
}

function _createOrder() {
  _createOrder = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var qbo, _req$body, Items, clientId, line, i, item, Order;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return QBO.getQbo();

          case 2:
            qbo = _context.sent;
            _req$body = req.body, Items = _req$body.Items, clientId = _req$body.clientId;
            line = [];

            for (i = 0; i < Items.length; i++) {
              item = {
                DetailType: "SalesItemLineDetail",
                SalesItemLineDetail: {
                  ItemRef: {
                    value: Items[i].itemId
                  }
                },
                Amount: Items[i].Amount
              };
              line.push(item);
            }

            Order = {
              CustomerRef: {
                value: clientId
              },
              Line: line
            };
            qbo.createEstimate(Order, function (err, estimate) {
              if (err) {
                res.json({
                  error: err
                });
              }

              res.json(estimate);
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createOrder.apply(this, arguments);
}

function getAvailable(_x3, _x4) {
  return _getAvailable.apply(this, arguments);
}

function _getAvailable() {
  _getAvailable = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var qbo;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return QBO.getQbo();

          case 2:
            qbo = _context2.sent;
            qbo.findEstimates({
              fetchAll: true
            }, function (err, estimate) {
              if (err) {
                res.json({
                  error: err
                });
              }

              res.json(estimate.QueryResponse);
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getAvailable.apply(this, arguments);
}