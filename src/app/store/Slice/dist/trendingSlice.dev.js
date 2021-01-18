"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchTrending = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _newsAPI = _interopRequireDefault(require("../../../api/newsAPI"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchTrending = (0, _toolkit.createAsyncThunk)('trending/getAll', function _callee(payload, thunkAPI) {
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
exports.fetchTrending = fetchTrending;
var trendingSlice = (0, _toolkit.createSlice)({
  name: 'trending',
  initialState: {
    data: [],
    status: null
  },
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchTrending.pending, function (state, action) {
    state.status = 'Loading';
  }), _defineProperty(_extraReducers, fetchTrending.fulfilled, function (state, action) {
    state.data = action.payload;
    state.status = 'Successfully';
  }), _defineProperty(_extraReducers, fetchTrending.rejected, function (state, action) {
    state.data = [];
    state.status = 'Server loading fail...';
  }), _extraReducers)
});
var actions = trendingSlice.actions,
    reducer = trendingSlice.reducer;
var _default = reducer;
exports["default"] = _default;