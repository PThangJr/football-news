"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axiosClient = _interopRequireDefault(require("./axiosClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var newsAPI = {
  register: function register(data) {
    var url = '/user/register';
    return _axiosClient["default"].post(url, data);
  },
  login: function login(data) {
    var url = '/user/login';
    return _axiosClient["default"].post(url, data);
  },
  getAccount: function getAccount() {
    var url = '/user/account';
    return _axiosClient["default"].get(url());
  }
};
var _default = newsAPI;
exports["default"] = _default;