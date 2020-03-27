"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = getAll;
exports.create = create;

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
            qbo.findPayments({
              fetchAll: true
            }, function (err, payments) {
              if (err) {
                return res.json(err);
              }

              res.json(payments.QueryResponse);
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

function create(_x3, _x4) {
  return _create.apply(this, arguments);
}

function _create() {
  _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var qbo, payment;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _index["default"].getQbo();

          case 2:
            qbo = _context2.sent;
            payment = {
              TotalAmt: req.body.totalAmt,
              CustomerRef: {
                value: req.body.ClientId
              }
            };
            qbo.createPayment(payment, function (err, payment) {
              if (err) {
                return res.status(400).json(err);
              }

              res.json(payment);
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _create.apply(this, arguments);
}