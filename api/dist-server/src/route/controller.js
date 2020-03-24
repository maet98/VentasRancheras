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

var _stop = require("../models/stop");

var _route = _interopRequireDefault(require("../models/route"));

_route["default"].hasMany(_stop.stop, {
  foreignKey: 'route_id'
});

function getStop(req, res) {
  _stop.stop.findAll().then(function (stop) {
    res.json(stop);
  })["catch"](function (err) {
    res.status(400).json(err);
  });
}

var createStop = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(element, route) {
    var priority, name, latitude, longitude, newStop;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            priority = element.priority, name = element.name, latitude = element.latitude, longitude = element.longitude;
            newStop = {
              name: name,
              latitude: latitude,
              longitude: longitude,
              route_id: route,
              priority: priority
            };

            if (!element.client) {
              newStop.client = element.client;
            }

            _stop.stop.create(newStop).then(function (ans) {
              return ans;
            })["catch"](function (err) {
              return null;
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createStop(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function getRouteByUser(req, res) {
  console.log(req.params.userId);

  _route["default"].findAll({
    limit: 1,
    where: {
      user: req.params.userId
    },
    order: [['createdAt', 'DESC']],
    include: [_stop.stop]
  }).then(function (ans) {
    res.json(ans);
  })["catch"](function (err) {
    res.status(400).json(err);
  });
}

function getRoute(req, res) {
  _route["default"].findAll({
    include: [_stop.stop]
  }).then(function (routes) {
    res.json(routes);
  })["catch"](function (err) {
    return console.error(err);
  });
}

var createStops = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(stops, id) {
    var arr;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            arr = [];
            stops.forEach(function (element) {
              createStop(element, id).then(function (ans) {
                arr.push(ans);
              });
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createStops(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

function createRoute(req, res, next) {
  var _req$body = req.body,
      stops = _req$body.stops,
      user = _req$body.user;
  var count = stops.lenght;

  _route["default"].create({
    user: user
  }).then(function (ans) {
    ans.stops = [];
    createStops(stops, ans.id).then(function () {
      res.json(ans);
    });
  });
}