"use strict";
/**
 * 京东-下拉
 * cron: 15 1,15,22 * * *
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
var sendNotify_1 = require("./sendNotify");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', UserName = '', res = '', message = '', shareCodes = [], shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, activityId, _a, _b, _c, index, value, encryptProjectId, _d, _e, t, tp, e_1_1, sum, userStarNum, i, e_2_1, full, _f, _g, _h, index, value, _loop_1, shareCodes_1, shareCodes_1_1, code, state_1, e_3_1, e_4_1;
    var e_2, _j, e_1, _k, e_4, _l, e_3, _m;
    var _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
    return __generator(this, function (_0) {
        switch (_0.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _0.sent();
                _0.label = 2;
            case 2:
                _0.trys.push([2, 25, 26, 27]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _0.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 24];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('showSecondFloorRunInfo', { "source": "run" })];
            case 4:
                res = _0.sent();
                activityId = res.data.result.activityBaseInfo.activityId;
                encryptProjectId = res.data.result.activityBaseInfo.encryptProjectId;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)
                    // 任务
                ];
            case 5:
                _0.sent();
                return [4 /*yield*/, api('superBrandTaskList', { "source": "run", "activityId": activityId, "assistInfoFlag": 1 })];
            case 6:
                // 任务
                res = _0.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                _0.label = 7;
            case 7:
                _0.trys.push([7, 14, 15, 16]);
                _d = (e_1 = void 0, __values(res.data.result.taskList)), _e = _d.next();
                _0.label = 8;
            case 8:
                if (!!_e.done) return [3 /*break*/, 13];
                t = _e.value;
                if (!(t.completionCnt !== t.assignmentTimesLimit)) return [3 /*break*/, 12];
                if (!(((_o = t.ext) === null || _o === void 0 ? void 0 : _o.shoppingActivity) || ((_p = t.ext) === null || _p === void 0 ? void 0 : _p.followShop))) return [3 /*break*/, 11];
                tp = ((_q = t.ext) === null || _q === void 0 ? void 0 : _q.shoppingActivity) || ((_r = t.ext) === null || _r === void 0 ? void 0 : _r.followShop);
                tp = tp[0];
                console.log(tp.title || tp.shopName, tp.itemId);
                return [4 /*yield*/, api('superBrandDoTask', { "source": "run", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": t.encryptAssignmentId, "assignmentType": t.assignmentType, "itemId": tp.itemId, "actionType": 0 })];
            case 9:
                res = _0.sent();
                console.log((_s = res.data) === null || _s === void 0 ? void 0 : _s.bizMsg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 10:
                _0.sent();
                return [3 /*break*/, 12];
            case 11:
                if ((_t = t.ext) === null || _t === void 0 ? void 0 : _t.assistTaskDetail) {
                    // 助力码
                    console.log('助力码：', t.ext.assistTaskDetail.itemId);
                    console.log('收到助力：', (_w = (_v = (_u = t.ext) === null || _u === void 0 ? void 0 : _u.assistList) === null || _v === void 0 ? void 0 : _v.length) !== null && _w !== void 0 ? _w : 0);
                    shareCodesSelf.push({
                        activityId: activityId,
                        encryptProjectId: encryptProjectId,
                        encryptAssignmentId: t.encryptAssignmentId,
                        itemId: t.ext.assistTaskDetail.itemId
                    });
                }
                _0.label = 12;
            case 12:
                _e = _d.next();
                return [3 /*break*/, 8];
            case 13: return [3 /*break*/, 16];
            case 14:
                e_1_1 = _0.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 16];
            case 15:
                try {
                    if (_e && !_e.done && (_k = _d["return"])) _k.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 16:
                if (!(new Date().getHours() === 23)) return [3 /*break*/, 23];
                sum = 0;
                return [4 /*yield*/, api('showSecondFloorRunInfo', { "source": "run" })];
            case 17:
                res = _0.sent();
                userStarNum = Math.floor(res.data.result.activityUserInfo.userStarNum / 300);
                console.log('可以抽奖', userStarNum, '次');
                i = 0;
                _0.label = 18;
            case 18:
                if (!(i < userStarNum)) return [3 /*break*/, 22];
                return [4 /*yield*/, api('superBrandTaskLottery', { "source": "run", "activityId": activityId })];
            case 19:
                res = _0.sent();
                if ((_z = (_y = (_x = res.data.result) === null || _x === void 0 ? void 0 : _x.rewardComponent) === null || _y === void 0 ? void 0 : _y.beanList) === null || _z === void 0 ? void 0 : _z.length) {
                    console.log('抽奖获得京豆：', res.data.result.rewardComponent.beanList[0].quantity);
                    sum += res.data.result.rewardComponent.beanList[0].quantity;
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 20:
                _0.sent();
                _0.label = 21;
            case 21:
                i++;
                return [3 /*break*/, 18];
            case 22:
                message += "\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n\u62BD\u5956").concat(userStarNum, "\u6B21\uFF0C\u83B7\u5F97\u4EAC\u8C46").concat(sum, "\n\n");
                _0.label = 23;
            case 23:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 24: return [3 /*break*/, 27];
            case 25:
                e_2_1 = _0.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 27];
            case 26:
                try {
                    if (_b && !_b.done && (_j = _a["return"])) _j.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 27: return [4 /*yield*/, (0, sendNotify_1.sendNotify)('京东特物', message)];
            case 28:
                _0.sent();
                console.log(shareCodesSelf);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 29:
                _0.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('tewu')];
            case 30:
                shareCodesHW = _0.sent();
                full = [];
                _0.label = 31;
            case 31:
                _0.trys.push([31, 43, 44, 45]);
                _f = __values(cookiesArr.entries()), _g = _f.next();
                _0.label = 32;
            case 32:
                if (!!_g.done) return [3 /*break*/, 42];
                _h = __read(_g.value, 2), index = _h[0], value = _h[1];
                shareCodes = index === 0
                    ? Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesHW), false), __read(shareCodesSelf), false)))
                    : Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false)));
                cookie = value;
                return [4 /*yield*/, api('superBrandTaskList', { "source": "run", "activityId": activityId, "assistInfoFlag": 1 })];
            case 33:
                res = _0.sent();
                _loop_1 = function (code) {
                    return __generator(this, function (_1) {
                        switch (_1.label) {
                            case 0:
                                if (!!full.includes(code.itemId)) return [3 /*break*/, 3];
                                console.log("\u8D26\u53F7".concat(index + 1, " \u53BB\u52A9\u529B ").concat(code.itemId, " ").concat(shareCodesSelf.some(function (self) { return self.itemId === code.itemId; }) ? '*内部*' : ''));
                                return [4 /*yield*/, api('superBrandDoTask', { "source": "run", "activityId": code.activityId, "encryptProjectId": code.encryptProjectId, "encryptAssignmentId": code.encryptAssignmentId, "assignmentType": 2, "itemId": code.itemId, "actionType": 0 })];
                            case 1:
                                res = _1.sent();
                                if (res.data.bizCode === '0') {
                                    console.log('助力成功');
                                }
                                else if (res.data.bizCode === '103') {
                                    console.log('助力满了');
                                    full.push(code.itemId);
                                }
                                else if (res.data.bizCode === '108') {
                                    console.log('上限');
                                    return [2 /*return*/, "break"];
                                }
                                else if (res.data.bizCode === '2001') {
                                    console.log('黑号');
                                    return [2 /*return*/, "break"];
                                }
                                else {
                                    console.log('其他错误', res.data.bizMsg);
                                }
                                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                            case 2:
                                _1.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                console.log('助力满了，跳过');
                                _1.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                };
                _0.label = 34;
            case 34:
                _0.trys.push([34, 39, 40, 41]);
                shareCodes_1 = (e_3 = void 0, __values(shareCodes)), shareCodes_1_1 = shareCodes_1.next();
                _0.label = 35;
            case 35:
                if (!!shareCodes_1_1.done) return [3 /*break*/, 38];
                code = shareCodes_1_1.value;
                return [5 /*yield**/, _loop_1(code)];
            case 36:
                state_1 = _0.sent();
                if (state_1 === "break")
                    return [3 /*break*/, 38];
                _0.label = 37;
            case 37:
                shareCodes_1_1 = shareCodes_1.next();
                return [3 /*break*/, 35];
            case 38: return [3 /*break*/, 41];
            case 39:
                e_3_1 = _0.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 41];
            case 40:
                try {
                    if (shareCodes_1_1 && !shareCodes_1_1.done && (_m = shareCodes_1["return"])) _m.call(shareCodes_1);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 41:
                _g = _f.next();
                return [3 /*break*/, 32];
            case 42: return [3 /*break*/, 45];
            case 43:
                e_4_1 = _0.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 45];
            case 44:
                try {
                    if (_g && !_g.done && (_l = _f["return"])) _l.call(_f);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 45: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/?uuid=&client=wh5&appid=ProductZ4Brand&functionId=".concat(fn, "&t=").concat(Date.now(), "&body=").concat(encodeURIComponent(JSON.stringify(body))), '', {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://pro.m.jd.com',
                            'Accept': 'application/json, text/plain, */*',
                            'User-Agent': 'jdapp;iPhone;10.3.2;',
                            'Referer': 'https://pro.m.jd.com/',
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
