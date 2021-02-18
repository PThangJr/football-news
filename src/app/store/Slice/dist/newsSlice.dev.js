"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchNews = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _newsAPI = _interopRequireDefault(require("../../../api/newsAPI"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchNews = (0, _toolkit.createAsyncThunk)('news/getAll', function _callee(payload, thunkAPI) {
  var response, rejectWithValue;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_newsAPI["default"].getAll(payload));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          rejectWithValue = thunkAPI.rejectWithValue;
          return _context.abrupt("return", rejectWithValue(_context.t0));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
exports.fetchNews = fetchNews;
var newsSlice = (0, _toolkit.createSlice)({
  name: 'news',
  initialState: {
    data: [],
    isLoading: null,
    total: 0,
    error: null
  },
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchNews.pending, function (state, action) {
    state.isLoading = true;
  }), _defineProperty(_extraReducers, fetchNews.fulfilled, function (state, action) {
    state.data = action.payload.data;
    state.isLoading = false;
    state.total = action.payload.total;
  }), _defineProperty(_extraReducers, fetchNews.rejected, function (state, action) {
    state.error = action.payload;
    state.isLoading = true;
  }), _extraReducers)
});
var reducer = newsSlice.reducer;
var _default = reducer;
exports["default"] = _default;