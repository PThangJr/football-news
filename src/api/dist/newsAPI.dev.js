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
  getNewById: function getNewById(newsId) {
    var url = "/".concat(newsId);
    return _axiosClient["default"].get(newsId);
  },
  getPremierLeague: function getPremierLeague(params) {
    var url = '/premier-league';
    return _axiosClient["default"].get(url, {
      params: params
    });
  },
  getLaLiga: function getLaLiga(params) {
    var url = '/la-liga';
    return _axiosClient["default"].get(url, {
      params: params
    });
  }
};
var _default = newsAPI;
exports["default"] = _default;