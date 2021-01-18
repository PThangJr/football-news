"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchLaLiga = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _news = _interopRequireDefault(require("../../../api/news"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchLaLiga = (0, _toolkit.createAsyncThunk)('news/getLaLiga', function _callee(params, thunkAPI) {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_news["default"].getPremierLeague(params));

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
exports.fetchLaLiga = fetchLaLiga;
var newsSlice = (0, _toolkit.createSlice)({
  name: 'news',
  initialState: {
    data: [],
    status: null
  },
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchLaLiga.pending, function (state, action) {
    state.status = 'Loading';
  }), _defineProperty(_extraReducers, fetchLaLiga.fulfilled, function (state, action) {
    state = {
      data: action.payload,
      status: 'Successfully!!'
    };
    return state;
  }), _extraReducers)
});
var actions = newsSlice.actions,
    reducer = newsSlice.reducer;
var _default = reducer;
exports["default"] = _default;