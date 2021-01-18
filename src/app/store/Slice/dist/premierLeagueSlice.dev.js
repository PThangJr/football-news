"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchPremierLeague = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _newsAPI = _interopRequireDefault(require("../../../api/newsAPI"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchPremierLeague = (0, _toolkit.createAsyncThunk)('news/getPremierLeague', function _callee(params, thunkAPI) {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_newsAPI["default"].getPremierLeague(params));

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
exports.fetchPremierLeague = fetchPremierLeague;
var premierLeagueSlice = (0, _toolkit.createSlice)({
  name: 'news',
  initialState: {
    data: [],
    status: null
  },
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchPremierLeague.pending, function (state, action) {
    state.status = 'Loading';
  }), _defineProperty(_extraReducers, fetchPremierLeague.fulfilled, function (state, action) {
    state = {
      data: action.payload,
      status: 'Successfully!!'
    };
    return state;
  }), _extraReducers)
});
var actions = premierLeagueSlice.actions,
    reducer = premierLeagueSlice.reducer;
var _default = reducer;
exports["default"] = _default;