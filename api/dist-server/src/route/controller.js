"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStop = getStop;
exports.createStop = createStop;
exports.getRoute = getRoute;
exports.createRoute = createRoute;

var _stop = require("../models/stop");

var _route = _interopRequireDefault(require("../models/route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getStop(req, res) {
  _stop.stop.findAll().then(function (stop) {
    res.json(stop);
  })["catch"](function (err) {
    res.status(400).json(err);
  });
}

function createStop(_x) {
  return _createStop.apply(this, arguments);
}

function _createStop() {
  _createStop = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {
    var _req$body2, client, priority, name, address, route;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body2 = req.body, client = _req$body2.client, priority = _req$body2.priority, name = _req$body2.name, address = _req$body2.address, route = _req$body2.route;

            _stop.stop.create({
              name: name,
              client: client,
              address: address,
              routeId: route,
              priority: priority
            }).then(function (ans) {
              return ans;
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
  return _createStop.apply(this, arguments);
}

function getRoute(req, res) {
  _route["default"].findAll().then(function (routes) {
    res.json(routes);
  })["catch"](function (err) {
    return console.error(err);
  });
}

function createRoute(req, res) {
  var _req$body = req.body,
      stops = _req$body.stops,
      name = _req$body.name,
      user = _req$body.user;

  _route["default"].create({
    user: user,
    name: name
  }).then(function (ans) {
    ans.stops = [];
    stops.forEach(function (element) {
      element.route = ans.id;
      createStop(element).then(function (ele) {
        if (ele) {
          ans.stops.add(ele);
        } else {
          return res.status(400).json(msg);
        }
      })["catch"](function (err) {
        return res.json(err);
      });
    });
    res.json(ans);
  });
}