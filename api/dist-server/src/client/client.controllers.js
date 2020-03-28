"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = getAll;
exports.getOne = getOne;
exports.createOne = createOne;
exports.filterName = filterName;
exports.getAvailable = getAvailable;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _employeeCustomer = require("../models/employee-customer");

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
    var qbo, _req$body, DisplayName, PrimaryEmailAddr, PrimaryPhone, CompanyName, Latitude, Longitude;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return QBO.getQbo();

          case 2:
            qbo = _context3.sent;
            _req$body = req.body, DisplayName = _req$body.DisplayName, PrimaryEmailAddr = _req$body.PrimaryEmailAddr, PrimaryPhone = _req$body.PrimaryPhone, CompanyName = _req$body.CompanyName, Latitude = _req$body.Latitude, Longitude = _req$body.Longitude;
            qbo.createCustomer({
              DisplayName: DisplayName,
              PrimaryEmailAddr: PrimaryEmailAddr,
              PrimaryPhone: PrimaryPhone,
              CompanyName: CompanyName,
              ShipAddr: req.body.ShipAddr
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

function getAvailable(_x9, _x10) {
  return _getAvailable.apply(this, arguments);
}

function _getAvailable() {
  _getAvailable = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var qbo;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return QBO.getQbo();

          case 2:
            qbo = _context5.sent;
            qbo.findCustomers({
              fetchAll: true
            }, function (err, customers) {
              if (err) {
                return res.status(400).json(err);
              }

              var arr = [];
              customers = customers.QueryResponse.Customer;
              console.log(customers);

              _employeeCustomer.employeeCustomer.findAll().then(function (relation) {
                for (var i = 0; i < customers.length; i++) {
                  var can = false;

                  for (var j = 0; j < relation.length; j++) {
                    if (customers[i].Id == relation[j].dataValues.CustomerId) {
                      can = true;
                      break;
                    }
                  }

                  if (can == false) {
                    arr.push(customers[i]);
                  }
                }

                res.json(arr);
              })["catch"](function (err) {
                res.status(400).json(err);
              });
            });

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getAvailable.apply(this, arguments);
}