"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axiosClient = _interopRequireDefault(require("./axiosClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var newsAPI = {
  getAll: function getAll(params) {
    var url = '/';
    return _axiosClient["default"].get(url, {
      params: params
    });
  },
  getPremierLeague: function getPremierLeague(params) {
    var url = '/premier-league';
    return _axiosClient["default"].get(url, {
      params: params
    });
  }
};
var _default = newsAPI;
exports["default"] = _default;