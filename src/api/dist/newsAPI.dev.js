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
  getNewBySlug: function getNewBySlug(params) {
    var slug = params.slug;
    var url = "/detail-new".concat(slug);
    return _axiosClient["default"].get(url);
  },
  postLiked: function postLiked(params) {
    var slug = params.slug;
    var url = "/detail-new/".concat(slug);
    return _axiosClient["default"].post(url);
  }
};
var _default = newsAPI;
exports["default"] = _default;