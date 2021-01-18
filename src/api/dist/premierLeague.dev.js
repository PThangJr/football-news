"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _axiosClient = _interopRequireDefault(require("./axiosClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var premierLeague = {
  getAll: function getAll(params) {
    var url = '/premier-league';
    return _axiosClient["default"].get(url, {
      params: params
    });
  }
};
var _default = premierLeague;
exports["default"] = _default;