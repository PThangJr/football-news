"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var axiosClient = _axios["default"].create({
  baseURL: 'http://localhost:8080/api/news',
  header: {
    'Content-Type': 'application/json'
  }
});

var _default = axiosClient; // Add a request interceptor

exports["default"] = _default;
axiosClient.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config; //Gắn token
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
}); // Add a response interceptor

axiosClient.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data; //Dữ liệu chuyển đổi
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});