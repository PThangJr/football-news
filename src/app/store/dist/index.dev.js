"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _slice = _interopRequireDefault(require("./fetchNews/slice"));

var _paginationSlice = _interopRequireDefault(require("./pagination/paginationSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = {
  dataNews: _slice["default"],
  pagination: _paginationSlice["default"]
};
var store = (0, _toolkit.configureStore)({
  reducer: rootReducer
});
var _default = store;
exports["default"] = _default;