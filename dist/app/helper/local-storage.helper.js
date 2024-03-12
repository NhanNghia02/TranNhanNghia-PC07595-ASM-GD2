"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageHelper = exports.LocalStorageKey = void 0;
exports.LocalStorageKey = {
    ID: 'block_id',
    COMPANY: 'company'
};
var LocalStorageHelper = /** @class */ (function () {
    function LocalStorageHelper() {
    }
    LocalStorageHelper.getId = function () {
        var _a;
        return JSON.parse((_a = localStorage.getItem(exports.LocalStorageKey.ID)) !== null && _a !== void 0 ? _a : '');
    };
    LocalStorageHelper.getCompany = function () {
        var _a;
        return JSON.parse((_a = localStorage.getItem(exports.LocalStorageKey.COMPANY)) !== null && _a !== void 0 ? _a : '');
    };
    return LocalStorageHelper;
}());
exports.LocalStorageHelper = LocalStorageHelper;
