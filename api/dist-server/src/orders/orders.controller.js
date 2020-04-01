"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrder = createOrder;
exports.confirmOrder = confirmOrder;
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
    var qbo, _req$body, Items, clientId;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return QBO.getQbo();

          case 2:
            qbo = _context.sent;
            _req$body = req.body, Items = _req$body.Items, clientId = _req$body.clientId;
            qbo.findItems({}, function (err, ans) {
              if (err) {
                return res.status(400).json(err);
              }

              var UnitPrice = new Map();
              var arr = ans.QueryResponse.Item;

              for (var i = 0; i < arr.length; i++) {
                UnitPrice.set(arr[i].Id, arr[i].UnitPrice);
              }

              var line = [];

              for (var _i = 0; _i < Items.length; _i++) {
                var item = {
                  DetailType: "SalesItemLineDetail",
                  SalesItemLineDetail: {
                    ItemRef: {
                      value: Items[_i].itemId
                    },
                    Qty: Items[_i].Amount
                  },
                  Amount: UnitPrice.get(Items[_i].itemId.toString()) * Items[_i].Amount
                };
                line.push(item);
              }

              qbo.getCustomer(clientId, function (err, ans) {
                if (err) {
                  return res.status(400).json(err);
                }

                var Order = {
                  CustomerRef: {
                    value: clientId
                  },
                  Line: line,
                  ShipAddr: req.body.ShipAddr,
                  PrivateNote: req.body.employeeId,
                  BillEmail: {
                    Address: ans.PrimaryEmailAddr.Address
                  }
                };
                qbo.createInvoice(Order, function (err, Invoice) {
                  if (err) {
                    res.json({
                      error: err
                    });
                  }

                  res.json(Invoice);
                });
              });
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createOrder.apply(this, arguments);
}

function confirmOrder(_x3, _x4) {
  return _confirmOrder.apply(this, arguments);
}

function _confirmOrder() {
  _confirmOrder = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, qbo;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return QBO.getQbo();

          case 3:
            qbo = _context2.sent;
            qbo.sendInvoicePdf(id, function (err, ans) {
              if (err) {
                console.log(err);
                return res.json(err);
              }

              console.log(ans);
              res.json(ans);
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _confirmOrder.apply(this, arguments);
}

function getOrdersByClientId(_x5, _x6) {
  return _getOrdersByClientId.apply(this, arguments);
}

function _getOrdersByClientId() {
  _getOrdersByClientId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, qbo;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.CustomerId;
            _context3.next = 3;
            return QBO.getQbo();

          case 3:
            qbo = _context3.sent;
            qbo.findInvoices({
              CustomerRef: id
            }, function (err, customers) {
              if (err) {
                return res.status(400).json(err);
              }

              res.json(customers);
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOrdersByClientId.apply(this, arguments);
}

function getAvailableOrders(_x7, _x8) {
  return _getAvailableOrders.apply(this, arguments);
}

function _getAvailableOrders() {
  _getAvailableOrders = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var qbo;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return QBO.getQbo();

          case 2:
            qbo = _context4.sent;
            qbo.findInvoices({
              fetchAll: true
            }, function (err, Invoice) {
              if (err) {
                console.log(err);
                return res.json({
                  error: err
                });
              }

              var orders = Invoice.QueryResponse.Invoice;
              console.log(orders.length);
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
                      break;
                    }

                    if ("PrivateNote" in orders[i]) {
                      orders[i].employeeId = orders[i].PrivateNote;
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
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getAvailableOrders.apply(this, arguments);
}

function getAll(_x9, _x10) {
  return _getAll.apply(this, arguments);
}

function _getAll() {
  _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var qbo;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return QBO.getQbo();

          case 2:
            qbo = _context5.sent;
            qbo.findInvoices({
              fetchAll: true
            }, function (err, invoice) {
              if (err) {
                res.json({
                  error: err
                });
              }

              var arr = invoice.QueryResponse.Invoice;

              for (var i = 0; i < arr.length; i++) {
                if ("PrivateNote" in arr[i]) {
                  arr[i].employeeId = arr[i].PrivateNote;
                }
              }

              res.json(arr);
            });

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getAll.apply(this, arguments);
}