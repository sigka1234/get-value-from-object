"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var getValue = function getValue(object, depth) {
  var defaultPrint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var _parseArrayData = function _parseArrayData(state, str) {
    var result = {
      result: false,
      data: ""
    };
    var leftCount = (str.match(/\[/g) || []).length;
    var rightCount = (str.match(/]/g) || []).length;
    var leftIndex = str.indexOf("[");
    var rightIndex = str.indexOf("]");
    var number = Number(str.substring(leftIndex + 1, rightIndex));

    if (leftCount > 0 && rightCount > 0 && leftCount === rightCount) {
      if (state && state[str.substring(0, leftIndex)] && state[str.substring(0, leftIndex)].length > 0 && state[str.substring(0, leftIndex)][number]) {
        if (leftCount === 1 && rightCount === 1) {
          result = {
            result: true,
            data: state[str.substring(0, leftIndex)][number]
          };
        } else {
          var tempState = state[str.substring(0, leftIndex)][number];
          var tempStr = str.substring(rightIndex + 1, str.length);
          var temp = {
            state: tempState
          };
          return _parseArrayData(temp, "state".concat(tempStr));
        }
      }
    }

    return result;
  };

  var _checkDepth = function _checkDepth(state) {
    var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (str.indexOf('.') >= 0) {
      var array = str.split('.');

      if (state && array[0]) {
        str = str.substring(str.indexOf('.') + 1, str.length);

        var parseArray = _parseArrayData(state, array[0]);

        if (parseArray.result) return parseArray.data ? _checkDepth(parseArray.data, str) : "";else return _checkDepth(state[array[0]], str);
      } else {
        return "";
      }
    } else {
      var _parseArray = _parseArrayData(state, str);

      if (_parseArray.result) return _parseArray.data ? _parseArray.data : "";
      return state && state[str] ? state[str] : "";
    }
  };

  if (_typeof(object) !== "object") return defaultPrint;

  if (depth) {
    var check = _checkDepth(object, depth);

    return check ? check : defaultPrint;
  } else {
    return object ? object : defaultPrint;
  }
};

var _default = getValue;
exports["default"] = _default;
module.exports = exports.default;