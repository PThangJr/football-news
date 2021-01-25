"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _newsSlice = _interopRequireDefault(require("./Slice/newsSlice"));

var _trendingSlice = _interopRequireDefault(require("./Slice/trendingSlice"));

var _premierLeagueSlice = _interopRequireDefault(require("./Slice/premierLeagueSlice"));

var _formAuthSlice = _interopRequireDefault(require("./Slice/formAuthSlice"));

var _paginationSlice = _interopRequireDefault(require("./pagination/paginationSlice"));

var _authSlice = _interopRequireDefault(require("./Slice/authSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = {
  dataNews: _newsSlice["default"],
  pagination: _paginationSlice["default"],
  dataPremierLeague: _premierLeagueSlice["default"],
  trending: _trendingSlice["default"],
  formAuth: _formAuthSlice["default"],
  auth: _authSlice["default"]
};
var store = (0, _toolkit.configureStore)({
  reducer: rootReducer
});
var _default = store;
exports["default"] = _default;