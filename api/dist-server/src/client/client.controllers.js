"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = getAll;
exports.getOne = getOne;
exports.createOne = createOne;
exports.filterName = filterName;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var QBO = require("../../ERP/index");

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
            return QBO.getQbo();

          case 2:
            qbo = _context.sent;
            qbo.findCustomers({
              fetchAll: true
            }, function (err, ans) {
              if (err) {
                if (err.fault.type === "AUTHENTICATION") res.redirect('/auth/signin');
                return err;
              }

              res.json(ans.QueryResponse.Customer);
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

function getOne(_x3, _x4) {
  return _getOne.apply(this, arguments);
}

function _getOne() {
  _getOne = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var qbo;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return QBO.getQbo();

          case 2:
            qbo = _context2.sent;
            qbo.getCustomer(req.param.id, function (err, customer) {
              if (err) {
                return res.json({
                  message: err
                });
              }

              return res.json(customer);
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getOne.apply(this, arguments);
}

function createOne(_x5, _x6) {
  return _createOne.apply(this, arguments);
}

function _createOne() {
  _createOne = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var qbo, _req$body, DisplayName, PrimaryEmailAddr, PrimaryPhone, CompanyName;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return QBO.getQbo();

          case 2:
            qbo = _context3.sent;
            _req$body = req.body, DisplayName = _req$body.DisplayName, PrimaryEmailAddr = _req$body.PrimaryEmailAddr, PrimaryPhone = _req$body.PrimaryPhone, CompanyName = _req$body.CompanyName;
            qbo.createCustomer({
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

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _createOne.apply(this, arguments);
}

function filterName(_x7, _x8) {
  return _filterName.apply(this, arguments);
}

function _filterName() {
  _filterName = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var qbo, name;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return QBO.getQbo();

          case 2:
            qbo = _context4.sent;
            name = req.params.name;
            name = '%' + name + '%';
            qbo.findCustomers([{
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

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _filterName.apply(this, arguments);
}