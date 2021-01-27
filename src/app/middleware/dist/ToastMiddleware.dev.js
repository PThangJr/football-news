"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastMiddleware = void 0;

var ToastMiddleware = function ToastMiddleware(state) {
  return function (next) {
    return function (action) {
      return next(action);
    };
  };
};

exports.ToastMiddleware = ToastMiddleware;