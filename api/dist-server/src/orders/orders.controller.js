"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrder = createOrder;
exports.getOrdersByClientId = getOrdersByClientId;
exports.getAvailableOrders = getAvailableOrders;
exports.getAll = getAll;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _stop = require("../models/stop");

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
              Line: line,
              ShipAddr: req.body.ShipAddr
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

function getOrdersByClientId(_x3, _x4) {
  return _getOrdersByClientId.apply(this, arguments);
}

function _getOrdersByClientId() {
  _getOrdersByClientId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, qbo;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.CustomerId;
            _context2.next = 3;
            return QBO.getQbo();

          case 3:
            qbo = _context2.sent;
            qbo.findEstimates({
              CustomerRef: id
            }, function (err, customers) {
              if (err) {
                return res.status(400).json(err);
              }

              res.json(customers);
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getOrdersByClientId.apply(this, arguments);
}

function getAvailableOrders(_x5, _x6) {
  return _getAvailableOrders.apply(this, arguments);
}

function _getAvailableOrders() {
  _getAvailableOrders = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var qbo;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return QBO.getQbo();

          case 2:
            qbo = _context3.sent;
            qbo.findEstimates({
              fetchAll: true
            }, function (err, estimate) {
              if (err) {
                console.log(err);
                return res.json({
                  error: err
                });
              }

              var orders = estimate.QueryResponse.Estimate;
              var ans = [];

              _stop.stop.findAll({
                where: {
                  entregado: false
                }
              }).then(function (stops) {
                for (var i = 0; i < orders.length; i++) {
                  var can = false;

                  for (var j = 0; j < stops.length; j++) {
                    if (orders[i].Id == stops[j].orderId) {
                      can = true;
                    }
                  }

                  if (!can) {
                    ans.push(orders[i]);
                  }
                }

                res.json({
                  "orders": ans
                });
              });
            });

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getAvailableOrders.apply(this, arguments);
}

function getAll(_x7, _x8) {
  return _getAll.apply(this, arguments);
}

function _getAll() {
  _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var qbo;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return QBO.getQbo();

          case 2:
            qbo = _context4.sent;
            qbo.findEstimates({
              fetchAll: true
            }, function (err, estimate) {
              if (err) {
                res.json({
                  error: err
                });
              }

              res.json(estimate.QueryResponse.Estimate);
            });

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getAll.apply(this, arguments);
}