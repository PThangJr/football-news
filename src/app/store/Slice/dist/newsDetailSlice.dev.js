"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchNewDetail = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  data: {},
  isLoading: null,
  errors: null
};
var fetchNewDetail = (0, _toolkit.createAsyncThunk)({});
exports.fetchNewDetail = fetchNewDetail;
var newDetailSlice = (0, _toolkit.createSlice)({
  name: 'news-detail',
  initialState: initialState,
  reducers: {},
  extraReducers: {}
});