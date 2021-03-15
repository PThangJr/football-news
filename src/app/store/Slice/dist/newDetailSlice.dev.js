"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.like = exports.fetchLiked = exports.fetchNewBySlug = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _newsAPI = _interopRequireDefault(require("../../../api/newsAPI"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  data: {},
  isLoading: null,
  errors: null
};
var fetchNewBySlug = (0, _toolkit.createAsyncThunk)('new-detail', function _callee(payload, thunkAPI) {
  var response, rejectWithValue;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_newsAPI["default"].getNewBySlug(payload));

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
exports.fetchNewBySlug = fetchNewBySlug;
var fetchLiked = (0, _toolkit.createAsyncThunk)('like-new', function _callee2(payload, thunkAPI) {
  var response, rejectWithValue;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_newsAPI["default"].postLiked(payload));

        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", response);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          rejectWithValue = thunkAPI.rejectWithValue;
          return _context2.abrupt("return", rejectWithValue(_context2.t0));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
exports.fetchLiked = fetchLiked;
var newDetailSlice = (0, _toolkit.createSlice)({
  name: 'new-detail',
  initialState: initialState,
  reducers: {
    like: function like(state, action) {
      console.log('like');
    }
  },
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchNewBySlug.pending, function (state, action) {
    state.isLoading = true;
  }), _defineProperty(_extraReducers, fetchNewBySlug.fulfilled, function (state, action) {
    state.data = action.payload.data;
    state.isLoading = false;
  }), _defineProperty(_extraReducers, fetchNewBySlug.rejected, function (state, action) {
    state.errors = action.payload;
    state.isLoading = false;
  }), _defineProperty(_extraReducers, fetchLiked.pending, function (state, action) {}), _defineProperty(_extraReducers, fetchLiked.fulfilled, function (state, action) {
    state.data = action.payload.data;
  }), _defineProperty(_extraReducers, fetchLiked.rejected, function (state, action) {
    state.errors = action.payload;
  }), _extraReducers)
});
var reducer = newDetailSlice.reducer,
    actions = newDetailSlice.actions;
var like = actions.like;
exports.like = like;
var _default = reducer;
exports["default"] = _default;