"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchGetUser = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _authAPI = _interopRequireDefault(require("../../../../api/authAPI"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchGetUser = (0, _toolkit.createAsyncThunk)('auth/information', function _callee(payload, thunkAPI) {
  var user, rejectWithValue;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_authAPI["default"].getUser());

        case 3:
          user = _context.sent;
          console.log(user);
          return _context.abrupt("return", user);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          rejectWithValue = thunkAPI.rejectWithValue;
          return _context.abrupt("return", rejectWithValue(_context.t0.data));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
exports.fetchGetUser = fetchGetUser;
var getUserSlice = (0, _toolkit.createSlice)({
  name: 'get-user',
  initialState: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchGetUser.fulfilled, function (state, action) {
    console.log(action);
    state = action.payload;
  }), _defineProperty(_extraReducers, fetchGetUser.rejected, function (state, action) {
    console.log(action);
    state = action.payload;
  }), _extraReducers)
});
var reducer = getUserSlice.reducer;
var _default = reducer;
exports["default"] = _default;