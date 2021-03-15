"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _newsSlice = _interopRequireDefault(require("./Slice/newsSlice"));

var _trendingSlice = _interopRequireDefault(require("./Slice/trendingSlice"));

var _displayAuthSlice = _interopRequireDefault(require("./Slice/Auth/displayAuthSlice"));

var _paginationSlice = _interopRequireDefault(require("./pagination/paginationSlice"));

var _authSlice = _interopRequireDefault(require("./Slice/Auth/authSlice"));

var _accountSlice = _interopRequireDefault(require("./Slice/Auth/accountSlice"));

var _getUserSlice = _interopRequireDefault(require("./Slice/Auth/getUserSlice"));

var _limitNewSlice = _interopRequireDefault(require("./Slice/limitNewSlice"));

var _newDetailSlice = _interopRequireDefault(require("./Slice/newDetailSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = {
  dataNews: _newsSlice["default"],
  pagination: _paginationSlice["default"],
  trending: _trendingSlice["default"],
  auth: _authSlice["default"],
  displayAuth: _displayAuthSlice["default"],
  account: _accountSlice["default"],
  limitNew: _limitNewSlice["default"],
  user: _getUserSlice["default"],
  dataNewBySlug: _newDetailSlice["default"],
  infoUser: _getUserSlice["default"]
};
var store = (0, _toolkit.configureStore)({
  reducer: rootReducer // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware)

});
var _default = store;
exports["default"] = _default;