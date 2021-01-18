"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.decrease = exports.increase = void 0;

var _toolkit = require("@reduxjs/toolkit");

var newsSlice = (0, _toolkit.createSlice)({
  name: 'counter',
  initialState: 0,
  reducers: {
    increase: function increase(state, action) {
      return state = state + 1;
    },
    decrease: function decrease(state, action) {
      state = state - 1;
    }
  }
});
var actions = newsSlice.actions,
    reducer = newsSlice.reducer;
var increase = actions.increase,
    decrease = actions.decrease;
exports.decrease = decrease;
exports.increase = increase;
var _default = reducer;
exports["default"] = _default;