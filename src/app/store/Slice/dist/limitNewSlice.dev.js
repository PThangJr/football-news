"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = 3;
var limitSlice = (0, _toolkit.createSlice)({
  name: 'limitNew',
  initialState: initialState
});
var reducer = limitSlice.reducer;
var _default = reducer;
exports["default"] = _default;