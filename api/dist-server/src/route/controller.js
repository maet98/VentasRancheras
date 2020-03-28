"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStop = getStop;
exports.getRouteByUser = getRouteByUser;
exports.getRoute = getRoute;
exports.createRoute = createRoute;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _stop2 = require("../models/stop");

var _route = _interopRequireDefault(require("../models/route"));

var _employeeCustomer = require("../models/employee-customer");

_route["default"].hasMany(_stop2.stop, {
  foreignKey: 'route_id'
});

function getStop(req, res) {
  _stop2.stop.findAll().then(function (stop) {
    res.json(stop);
  })["catch"](function (err) {
    res.status(400).json(err);
  });
}

function getRouteByUser(req, res) {
  console.log(req.params.userId);

  _route["default"].findAll({
    limit: 1,
    where: {
      user: req.params.userId
    },
    order: [['createdAt', 'DESC']],
    include: [_stop2.stop]
  }).then(function (ans) {
    res.json(ans);
  })["catch"](function (err) {
    res.status(400).json(err);
  });
}

function getRoute(req, res) {
  _route["default"].findAll({
    include: [_stop2.stop]
  }).then(function (routes) {
    res.json(routes);
  })["catch"](function (err) {
    return console.error(err);
  });
}

var createStop = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(element, route, user) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            element.route_id = route;

            _stop2.stop.create(element).then(function (ans) {
              if (element.hasOwnProperty("client")) {
                console.log(element);

                _employeeCustomer.employeeCustomer.create({
                  CustomerId: element.client,
                  employeeId: user
                }).then(function (a) {
                  return ans;
                });
              } else {
                return ans;
              }
            })["catch"](function (err) {
              return null;
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createStop(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var createStops = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(stops, id, user) {
    var arr, i, _stop;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            arr = [];
            i = 0;

          case 2:
            if (!(i < stops.length)) {
              _context2.next = 10;
              break;
            }

            _context2.next = 5;
            return createStop(stops[i], id, user);

          case 5:
            _stop = _context2.sent;
            arr.push(_stop);

          case 7:
            i++;
            _context2.next = 2;
            break;

          case 10:
            return _context2.abrupt("return", arr);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createStops(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

function createRoute(_x7, _x8, _x9) {
  return _createRoute.apply(this, arguments);
}

function _createRoute() {
  _createRoute = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var _req$body, stops, user, count;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, stops = _req$body.stops, user = _req$body.user;
            count = stops.lenght;

            _route["default"].create({
              user: user
            }).then( /*#__PURE__*/function () {
              var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(ans) {
                return _regenerator["default"].wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return createStops(stops, ans.id, user);

                      case 2:
                        ans.stops = _context3.sent;
                        console.log(ans);
                        return _context3.abrupt("return", res.json(ans));

                      case 5:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x10) {
                return _ref3.apply(this, arguments);
              };
            }());

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _createRoute.apply(this, arguments);
}