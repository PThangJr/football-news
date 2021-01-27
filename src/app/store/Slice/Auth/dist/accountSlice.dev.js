"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.changeAccount = void 0;

var _toolkit = require("@reduxjs/toolkit");

var accountSlice = (0, _toolkit.createSlice)({
  name: 'accountSlice',
  initialState: -1,
  reducers: {
    changeAccount: function changeAccount(state, action) {
      return state = action.payload;
    }
  }
});
var actions = accountSlice.actions,
    reducer = accountSlice.reducer;
var changeAccount = actions.changeAccount;
exports.changeAccount = changeAccount;
var _default = reducer;
exports["default"] = _default;