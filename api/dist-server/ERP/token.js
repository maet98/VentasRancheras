"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = getToken;
exports.Token = void 0;

var _token = require("../src/models/token");

var Token;
exports.Token = Token;

function getToken() {
  _token.token.findAll({
    limit: 1,
    order: [['createdAt', 'DESC']]
  }).then(function (entries) {
    if (entries.length > 0) {
      exports.Token = Token = entries[0].token;
      return Token;
    }
  });
}