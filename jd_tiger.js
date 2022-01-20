"use strict";
/**
 * 京东-萌虎摇摇乐
 * https://yearfestival.jd.com
 * cron: 0 0,9,16 * * *
 * 助力顺序
 * CK1    HW.ts -> 内部   -> 助力池
 * CK2~n  内部   -> HW.ts -> 助力池
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', shareCodes = [], UserName = '', shareCodesSelf = [], shareCodesHW = [];
var cards = {};
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _a, _b, _c, index, value, _d, _e, tab, taskGroupId, _f, _g, t, i, sleep, e_1_1, e_2_1, e_3, e_4_1, _h, _j, _k, index, value, temp, shareCodes_1, shareCodes_1_1, code, e_5_1, e_6, e_7_1, _l, _m, _o, index, value, lotteryNum, i, e_8, e_9_1;
    var e_4, _p, e_2, _q, e_1, _r, e_7, _s, e_5, _t, e_9, _u;
    var _v, _w;
    return __generator(this, function (_x) {
        switch (_x.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _x.sent();
                if (process.argv[2]) {
                    cookiesArr = [decodeURIComponent(process.argv[2])];
                    console.log("\u6536\u5230Cookie\uFF1A".concat(decodeURIComponent(cookiesArr[0])));
                }
                _x.label = 2;
            case 2:
                _x.trys.push([2, 36, 37, 38]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _x.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 35];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                _x.label = 4;
            case 4:
                _x.trys.push([4, 33, , 34]);
                return [4 /*yield*/, api({ "apiMapping": "/api/task/support/getShareId" })];
            case 5:
                res = _x.sent();
                console.log('助力码：', res.data);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 6:
                _x.sent();
                shareCodesSelf.push(res.data);
                return [4 /*yield*/, api({ "apiMapping": "/api/task/support/list" })];
            case 7:
                res = _x.sent();
                console.log('收到助力：', res.data.supportedNum);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 8:
                _x.sent();
                return [4 /*yield*/, api({ "apiMapping": "/api/task/brand/tabs" })];
            case 9:
                res = _x.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 10:
                _x.sent();
                _x.label = 11;
            case 11:
                _x.trys.push([11, 30, 31, 32]);
                _d = (e_2 = void 0, __values(res.data)), _e = _d.next();
                _x.label = 12;
            case 12:
                if (!!_e.done) return [3 /*break*/, 29];
                tab = _e.value;
                taskGroupId = tab.taskGroupId;
                return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "apiMapping": "/api/task/brand/getTaskList" })];
            case 13:
                res = _x.sent();
                _x.label = 14;
            case 14:
                _x.trys.push([14, 26, 27, 28]);
                _f = (e_1 = void 0, __values(res.data)), _g = _f.next();
                _x.label = 15;
            case 15:
                if (!!_g.done) return [3 /*break*/, 25];
                t = _g.value;
                i = t.finishNum;
                _x.label = 16;
            case 16:
                if (!(i < t.totalNum)) return [3 /*break*/, 24];
                return [4 /*yield*/, getTaskDetail(taskGroupId)];
            case 17:
                res = _x.sent();
                if (!res) return [3 /*break*/, 23];
                console.log(taskGroupId, res.taskId, res.taskItemId, res.taskType, res.taskItemName);
                sleep = res.browseTime ? res.browseTime * 1000 : 1000;
                return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "taskId": res.taskId, "taskItemId": res.taskItemId, "apiMapping": "/api/task/brand/doTask" })];
            case 18:
                res = _x.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(sleep)];
            case 19:
                _x.sent();
                if (!(res.data.taskType === 'BROWSE_TASK')) return [3 /*break*/, 22];
                return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "taskId": res.data.taskId, "taskItemId": res.data.taskItemId, "timestamp": res.data.timeStamp, "apiMapping": "/api/task/brand/getReward" })];
            case 20:
                res = _x.sent();
                console.log('任务完成，积分：', res.data.integral, '，京豆：', res.data.jbean);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 21:
                _x.sent();
                return [3 /*break*/, 23];
            case 22:
                if (res.data.taskType === 'FOLLOW_SHOP_TASK') {
                    // console.log('任务完成，获得：', res.data.rewardInfoVo?.integral, res.data.rewardInfoVo?.jbean)
                    console.log(res.data.rewardInfoVo);
                }
                _x.label = 23;
            case 23:
                i++;
                return [3 /*break*/, 16];
            case 24:
                _g = _f.next();
                return [3 /*break*/, 15];
            case 25: return [3 /*break*/, 28];
            case 26:
                e_1_1 = _x.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 28];
            case 27:
                try {
                    if (_g && !_g.done && (_r = _f["return"])) _r.call(_f);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 28:
                _e = _d.next();
                return [3 /*break*/, 12];
            case 29: return [3 /*break*/, 32];
            case 30:
                e_2_1 = _x.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 32];
            case 31:
                try {
                    if (_e && !_e.done && (_q = _d["return"])) _q.call(_d);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 32: return [3 /*break*/, 34];
            case 33:
                e_3 = _x.sent();
                console.log('黑号？', e_3);
                return [3 /*break*/, 34];
            case 34:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 35: return [3 /*break*/, 38];
            case 36:
                e_4_1 = _x.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 38];
            case 37:
                try {
                    if (_b && !_b.done && (_p = _a["return"])) _p.call(_a);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 38:
                _x.trys.push([38, 56, 57, 58]);
                _h = __values(cookiesArr.entries()), _j = _h.next();
                _x.label = 39;
            case 39:
                if (!!_j.done) return [3 /*break*/, 55];
                _k = __read(_j.value, 2), index = _k[0], value = _k[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _x.label = 40;
            case 40:
                _x.trys.push([40, 53, , 54]);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('tiger', 30)];
            case 41:
                temp = _x.sent();
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 43];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('tiger')];
            case 42:
                shareCodesHW = _x.sent();
                _x.label = 43;
            case 43:
                index === 0
                    ? shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], __read(shareCodesHW), false), __read(shareCodesSelf), false), __read(temp), false)))
                    : shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false), __read(temp), false)));
                _x.label = 44;
            case 44:
                _x.trys.push([44, 50, 51, 52]);
                shareCodes_1 = (e_5 = void 0, __values(shareCodes)), shareCodes_1_1 = shareCodes_1.next();
                _x.label = 45;
            case 45:
                if (!!shareCodes_1_1.done) return [3 /*break*/, 49];
                code = shareCodes_1_1.value;
                console.log("\u8D26\u53F7".concat(index + 1, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodesSelf.includes(code) ? '(内部)' : ''));
                return [4 /*yield*/, api({ "shareId": code, "apiMapping": "/api/task/support/doSupport" })];
            case 46:
                res = _x.sent();
                if (res.data.status === 1) {
                    !res.data.supporterPrize
                        ? console.log('不助力自己')
                        : console.log('助力成功，京豆：', (_v = res.data.supporterPrize) === null || _v === void 0 ? void 0 : _v.beans, '，积分：', (_w = res.data.supporterPrize) === null || _w === void 0 ? void 0 : _w.score);
                }
                else if (res.data.status === 7) {
                    console.log('上限');
                    return [3 /*break*/, 49];
                }
                else if (res.data.status === 3) {
                    console.log('已助力过');
                }
                else {
                    console.log('其他情况', res.data.status);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 47:
                _x.sent();
                _x.label = 48;
            case 48:
                shareCodes_1_1 = shareCodes_1.next();
                return [3 /*break*/, 45];
            case 49: return [3 /*break*/, 52];
            case 50:
                e_5_1 = _x.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 52];
            case 51:
                try {
                    if (shareCodes_1_1 && !shareCodes_1_1.done && (_t = shareCodes_1["return"])) _t.call(shareCodes_1);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 52: return [3 /*break*/, 54];
            case 53:
                e_6 = _x.sent();
                console.log('黑号？', e_6);
                return [3 /*break*/, 54];
            case 54:
                _j = _h.next();
                return [3 /*break*/, 39];
            case 55: return [3 /*break*/, 58];
            case 56:
                e_7_1 = _x.sent();
                e_7 = { error: e_7_1 };
                return [3 /*break*/, 58];
            case 57:
                try {
                    if (_j && !_j.done && (_s = _h["return"])) _s.call(_h);
                }
                finally { if (e_7) throw e_7.error; }
                return [7 /*endfinally*/];
            case 58:
                _x.trys.push([58, 70, 71, 72]);
                _l = __values(cookiesArr.entries()), _m = _l.next();
                _x.label = 59;
            case 59:
                if (!!_m.done) return [3 /*break*/, 69];
                _o = __read(_m.value, 2), index = _o[0], value = _o[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                _x.label = 60;
            case 60:
                _x.trys.push([60, 67, , 68]);
                return [4 /*yield*/, api({ "apiMapping": "/api/index/indexInfo" })];
            case 61:
                res = _x.sent();
                lotteryNum = res.data.lotteryNum;
                console.log('抽奖次数：', lotteryNum);
                i = 0;
                _x.label = 62;
            case 62:
                if (!(i < lotteryNum)) return [3 /*break*/, 66];
                return [4 /*yield*/, api({ "apiMapping": "/api/lottery/lottery" })];
            case 63:
                res = _x.sent();
                console.log('抽奖', i + 1, '/', lotteryNum, res.data.prizeName);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 64:
                _x.sent();
                _x.label = 65;
            case 65:
                i++;
                return [3 /*break*/, 62];
            case 66: return [3 /*break*/, 68];
            case 67:
                e_8 = _x.sent();
                console.log('黑号？', e_8);
                return [3 /*break*/, 68];
            case 68:
                _m = _l.next();
                return [3 /*break*/, 59];
            case 69: return [3 /*break*/, 72];
            case 70:
                e_9_1 = _x.sent();
                e_9 = { error: e_9_1 };
                return [3 /*break*/, 72];
            case 71:
                try {
                    if (_m && !_m.done && (_u = _l["return"])) _u.call(_l);
                }
                finally { if (e_9) throw e_9.error; }
                return [7 /*endfinally*/];
            case 72: return [2 /*return*/];
        }
    });
}); })();
function api(body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post('https://api.m.jd.com/api', "appid=china-joy&functionId=collect_bliss_cards_prod&body=".concat(JSON.stringify(body), "&t=").concat(Date.now(), "&loginType=2"), {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://yearfestival.jd.com',
                            'Accept': 'application/json, text/plain, */*',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://yearfestival.jd.com/',
                            'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
function getTaskDetail(taskGroupId) {
    return __awaiter(this, void 0, void 0, function () {
        var res, _a, _b, t;
        var e_10, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "apiMapping": "/api/task/brand/getTaskList" })];
                case 1:
                    res = _d.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 2:
                    _d.sent();
                    try {
                        for (_a = __values(res.data), _b = _a.next(); !_b.done; _b = _a.next()) {
                            t = _b.value;
                            if (t.finishNum !== t.totalNum) {
                                return [2 /*return*/, t];
                            }
                        }
                    }
                    catch (e_10_1) { e_10 = { error: e_10_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                        }
                        finally { if (e_10) throw e_10.error; }
                    }
                    return [2 /*return*/, ''];
            }
        });
    });
}
