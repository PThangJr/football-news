"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchNewById = exports.fetchNews = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _newsAPI = _interopRequireDefault(require("../../../api/newsAPI"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchNews = (0, _toolkit.createAsyncThunk)('news/getAll', function _callee(payload, thunkAPI) {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_newsAPI["default"].getAll(payload));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", response);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.fetchNews = fetchNews;
var fetchNewById = (0, _toolkit.createAsyncThunk)('news/getNewById', function _callee2(payload, thunkAPI) {
  var response;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_newsAPI["default"].getNewById(payload));

        case 2:
          response = _context2.sent;
          return _context2.abrupt("return", response);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
exports.fetchNewById = fetchNewById;
var newsSlice = (0, _toolkit.createSlice)({
  name: 'news',
  initialState: {
    data: [],
    isLoading: null,
    dataById: []
  },
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchNews.pending, function (state, action) {
    state.isLoading = true;
  }), _defineProperty(_extraReducers, fetchNews.fulfilled, function (state, action) {
    state.data = action.payload;
    state.isLoading = false;
  }), _defineProperty(_extraReducers, fetchNews.rejected, function (state, action) {
    state.data = [];
    state.isLoading = true;
  }), _defineProperty(_extraReducers, fetchNewById.pending, function (state, action) {
    state.isLoading = true;
  }), _defineProperty(_extraReducers, fetchNewById.fulfilled, function (state, action) {
    state.dataById = action.payload;
    state.isLoading = false;
  }), _extraReducers)
});
var reducer = newsSlice.reducer;
var _default = reducer;
exports["default"] = _default;