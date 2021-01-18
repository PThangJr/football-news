"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.changePage = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  _limit: 20,
  _page: 1
};
var newsSlice = (0, _toolkit.createSlice)({
  name: 'news',
  initialState: initialState,
  reducers: {
    changePage: function changePage(state, action) {
      state._page = action.payload;
    }
  }
});
var actions = newsSlice.actions,
    reducer = newsSlice.reducer;
var changePage = actions.changePage;
exports.changePage = changePage;
var _default = reducer;
exports["default"] = _default;