"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get = function (object, depth, defaultPrint) {
    if (defaultPrint === void 0) { defaultPrint = ''; }
    var _parseArrayData = function (state, str) {
        var result = { result: false, data: "" };
        var leftCount = (str.match(/\[/g) || []).length;
        var rightCount = (str.match(/]/g) || []).length;
        var leftIndex = str.indexOf("[");
        var rightIndex = str.indexOf("]");
        var number = Number(str.substring(leftIndex + 1, rightIndex));
        if (leftCount > 0 && rightCount > 0 && leftCount === rightCount) {
            if (state && state[str.substring(0, leftIndex)] && (state[str.substring(0, leftIndex)].length > 0) && state[str.substring(0, leftIndex)][number]) {
                if (leftCount === 1 && rightCount === 1) {
                    result = { result: true, data: state[str.substring(0, leftIndex)][number] };
                }
                else {
                    var tempState = state[str.substring(0, leftIndex)][number];
                    var tempStr = str.substring(rightIndex + 1, str.length);
                    var temp = { state: tempState };
                    return _parseArrayData(temp, "state" + tempStr);
                }
            }
        }
        return result;
    };
    var _checkDepth = function (state, str) {
        if (str === void 0) { str = ''; }
        if (str.indexOf('.') >= 0) {
            var array = str.split('.');
            if (state && array[0]) {
                str = str.substring((str.indexOf('.') + 1), str.length);
                var parseArray = _parseArrayData(state, array[0]);
                if (parseArray.result)
                    return parseArray.data ? _checkDepth(parseArray.data, str) : "";
                else
                    return _checkDepth(state[array[0]], str);
            }
            else {
                return "";
            }
        }
        else {
            var parseArray = _parseArrayData(state, str);
            if (parseArray.result)
                return parseArray.data ? parseArray.data : "";
            return state && state[str] ? state[str] : "";
        }
    };
    if (typeof object !== "object")
        return defaultPrint;
    if (depth) {
        var check = _checkDepth(object, depth);
        return check ? check : defaultPrint;
    }
    else {
        return object ? object : defaultPrint;
    }
};
exports.default = get;
