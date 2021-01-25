"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axiosClient = _interopRequireDefault(require("./axiosClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var newsAPI = {
  getAll: function getAll(params) {
    var pagination = params.pagination,
        _params$tournament = params.tournament,
        tournament = _params$tournament === void 0 ? '/' : _params$tournament;
    var url = "/news".concat(tournament);
    return _axiosClient["default"].get(url, {
      params: pagination
    });
  },
  getNewById: function getNewById(newsId) {
    var url = "/news/".concat(newsId);
    return _axiosClient["default"].get(url);
  },
  getPremierLeague: function getPremierLeague(params) {
    var url = '/news/premier-league';
    return _axiosClient["default"].get(url, {
      params: params
    });
  },
  getLaLiga: function getLaLiga(params) {
    var url = '/news/la-liga';
    return _axiosClient["default"].get(url, {
      params: params
    });
  }
};
var _default = newsAPI;
exports["default"] = _default;