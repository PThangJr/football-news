"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchLogin = exports.fetchRegister = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _authAPI = _interopRequireDefault(require("../../../../api/authAPI"));

var _reactToastify = require("react-toastify");

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchRegister = (0, _toolkit.createAsyncThunk)('user/register', function _callee(payload, thunkAPI) {
  var data, rejectWithValue;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_authAPI["default"].register(payload));

        case 3:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          rejectWithValue = thunkAPI.rejectWithValue;
          return _context.abrupt("return", rejectWithValue(_context.t0.data));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
exports.fetchRegister = fetchRegister;
var fetchLogin = (0, _toolkit.createAsyncThunk)('user/login', function _callee2(payload, _ref) {
  var rejectWithValue, data;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          rejectWithValue = _ref.rejectWithValue;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_authAPI["default"].login(payload));

        case 4:
          data = _context2.sent;
          // console.log(data);
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('user', JSON.stringify(data.user));
          return _context2.abrupt("return", data);

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          return _context2.abrupt("return", rejectWithValue(_context2.t0.data));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 10]]);
});
exports.fetchLogin = fetchLogin;
var initialState = {
  response: {},
  errors: {}
};
var authSlice = (0, _toolkit.createSlice)({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchRegister.fulfilled, function (state, action) {
    console.log(action);

    _reactToastify.toast.success('Đăng ký thành cmn công!!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

    state.response = action.payload;
    state.response = action.payload;
  }), _defineProperty(_extraReducers, fetchRegister.rejected, function (state, action) {
    console.log(action.payload.message);
    state.errors = action.payload;
  }), _defineProperty(_extraReducers, fetchLogin.fulfilled, function (state, action) {
    console.log(action.payload.user.role);
    var role = action.payload.user.role;
    var message = 'Đăng nhập thành công !!';

    if (role === 0) {
      message = 'Đăng nhập với quyền Admin';
    }

    _reactToastify.toast.success(message, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

    state.response = action.payload;
  }), _defineProperty(_extraReducers, fetchLogin.rejected, function (state, action) {
    // console.log(action);
    state.errors = action.payload;
  }), _extraReducers)
});
var reducer = authSlice.reducer;
var _default = reducer;
exports["default"] = _default;