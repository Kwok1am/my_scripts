"use strict";
/**
 * jd_zjd
 * Cookie >= 4 内部
 * Cookie <  4 HW.ts -> 内部
 * cron: 15 0,1,23 * * *
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
var V3_1 = require("./utils/V3");
var zjd_1 = require("./utils/zjd");
var cookie = '', res = '', UserName;
var USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat';
var shareCodeSelf = [], shareCode = [], shareCodeHW = [], encPin = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _a, _b, _c, index, value, _d, fp, tk, genKey, e_1, e_2_1, temp, temp_1, temp_1_1, item, _e, _f, _g, index, value, _h, fp, tk, genKey, shareCode_1, shareCode_1_1, code, e_3, e_4_1, e_5_1;
    var e_2, _j, e_6, _k, e_5, _l, e_4, _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _o.sent();
                _o.label = 2;
            case 2:
                _o.trys.push([2, 21, 22, 23]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _o.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 20];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                _o.label = 4;
            case 4:
                _o.trys.push([4, 16, , 17]);
                return [4 /*yield*/, (0, V3_1.requestAlgo)('d8ac0', USER_AGENT)];
            case 5:
                _d = _o.sent(), fp = _d.fp, tk = _d.tk, genKey = _d.genKey;
                (0, zjd_1.init)(fp, tk, genKey);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('distributeBeanActivityInfo', { "paramData": { "channel": "FISSION_BEAN" } })];
            case 6:
                res = _o.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 7:
                _o.sent();
                if (!(res.data.assistStatus === 1)) return [3 /*break*/, 8];
                // 已开，没满
                console.log('已开团，未满，剩余', Math.round(res.data.assistValidMilliseconds / 1000 / 60), '分钟');
                shareCodeSelf.push({
                    activityIdEncrypted: res.data.id,
                    assistStartRecordId: res.data.assistStartRecordId,
                    assistedPinEncrypted: res.data.encPin
                });
                return [3 /*break*/, 15];
            case 8:
                if (!(res.data.assistStatus === 2 && res.data.canStartNewAssist)) return [3 /*break*/, 14];
                return [4 /*yield*/, api('vvipclub_distributeBean_startAssist', { "activityIdEncrypted": res.data.id, "channel": "FISSION_BEAN" })];
            case 9:
                // 没开团
                res = _o.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 10:
                _o.sent();
                if (!res.success) return [3 /*break*/, 13];
                console.log("\u5F00\u56E2\u6210\u529F\uFF0C\u7ED3\u675F\u65F6\u95F4\uFF1A".concat(res.data.endTime));
                return [4 /*yield*/, api('distributeBeanActivityInfo', { "paramData": { "channel": "FISSION_BEAN" } })];
            case 11:
                res = _o.sent();
                shareCodeSelf.push({
                    activityIdEncrypted: res.data.id,
                    assistStartRecordId: res.data.assistStartRecordId,
                    assistedPinEncrypted: res.data.encPin
                });
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 12:
                _o.sent();
                _o.label = 13;
            case 13: return [3 /*break*/, 15];
            case 14:
                if (!res.data.canStartNewAssist) {
                    console.log('不可开团');
                }
                _o.label = 15;
            case 15: return [3 /*break*/, 17];
            case 16:
                e_1 = _o.sent();
                console.log(e_1);
                return [3 /*break*/, 17];
            case 17: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 18:
                _o.sent();
                _o.label = 19;
            case 19:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 20: return [3 /*break*/, 23];
            case 21:
                e_2_1 = _o.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 23];
            case 22:
                try {
                    if (_b && !_b.done && (_j = _a["return"])) _j.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 23:
                console.log(shareCodeSelf);
                shareCodeHW = (0, TS_USER_AGENTS_1.getshareCodeHW)('zjd');
                if (cookiesArr.length < 4) {
                    temp = Array.from(__spreadArray(__spreadArray([], __read(shareCodeHW), false), __read(shareCodeSelf), false));
                }
                else {
                    temp = shareCodeSelf;
                }
                try {
                    for (temp_1 = __values(temp), temp_1_1 = temp_1.next(); !temp_1_1.done; temp_1_1 = temp_1.next()) {
                        item = temp_1_1.value;
                        if (!encPin.includes(item.assistedPinEncrypted)) {
                            encPin.push(item.assistedPinEncrypted);
                            shareCode.push(item);
                        }
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (temp_1_1 && !temp_1_1.done && (_k = temp_1["return"])) _k.call(temp_1);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
                _o.label = 24;
            case 24:
                _o.trys.push([24, 42, 43, 44]);
                _e = __values(cookiesArr.entries()), _f = _e.next();
                _o.label = 25;
            case 25:
                if (!!_f.done) return [3 /*break*/, 41];
                _g = __read(_f.value, 2), index = _g[0], value = _g[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                return [4 /*yield*/, (0, V3_1.requestAlgo)('d8ac0', USER_AGENT)];
            case 26:
                _h = _o.sent(), fp = _h.fp, tk = _h.tk, genKey = _h.genKey;
                (0, zjd_1.init)(fp, tk, genKey);
                _o.label = 27;
            case 27:
                _o.trys.push([27, 36, 37, 38]);
                shareCode_1 = (e_4 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                _o.label = 28;
            case 28:
                if (!!shareCode_1_1.done) return [3 /*break*/, 35];
                code = shareCode_1_1.value;
                _o.label = 29;
            case 29:
                _o.trys.push([29, 31, , 32]);
                console.log("\u8D26\u53F7".concat(index + 1, " ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code.assistedPinEncrypted.replace('\n', '')));
                return [4 /*yield*/, api('vvipclub_distributeBean_assist', { "activityIdEncrypted": code.activityIdEncrypted, "assistStartRecordId": code.assistStartRecordId, "assistedPinEncrypted": code.assistedPinEncrypted, "channel": "FISSION_BEAN", "launchChannel": "undefined" })];
            case 30:
                res = _o.sent();
                if (res.resultCode === '9200008') {
                    console.log('不能助力自己');
                }
                else if (res.resultCode === '2400203') {
                    console.log('上限');
                    return [3 /*break*/, 35];
                }
                else if (res.success) {
                    console.log('助力成功');
                    return [3 /*break*/, 35];
                }
                else {
                    (0, TS_USER_AGENTS_1.o2s)(res);
                }
                return [3 /*break*/, 32];
            case 31:
                e_3 = _o.sent();
                console.log(e_3);
                return [3 /*break*/, 35];
            case 32: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 33:
                _o.sent();
                _o.label = 34;
            case 34:
                shareCode_1_1 = shareCode_1.next();
                return [3 /*break*/, 28];
            case 35: return [3 /*break*/, 38];
            case 36:
                e_4_1 = _o.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 38];
            case 37:
                try {
                    if (shareCode_1_1 && !shareCode_1_1.done && (_m = shareCode_1["return"])) _m.call(shareCode_1);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 38:
                console.log();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 39:
                _o.sent();
                _o.label = 40;
            case 40:
                _f = _e.next();
                return [3 /*break*/, 25];
            case 41: return [3 /*break*/, 44];
            case 42:
                e_5_1 = _o.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 44];
            case 43:
                try {
                    if (_f && !_f.done && (_l = _e["return"])) _l.call(_e);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 44: return [2 /*return*/];
        }
    });
}); })();
function api(fn, params) {
    return __awaiter(this, void 0, void 0, function () {
        var h5st, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (fn === 'vvipclub_distributeBean_assist') {
                        h5st = (0, zjd_1.zjdTool)({ "activityIdEncrypted": params.activityIdEncrypted, "channel": "FISSION_BEAN" });
                    }
                    else {
                        h5st = (0, zjd_1.zjdTool)(params);
                    }
                    return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/api?functionId=".concat(fn, "&fromType=wxapp&timestamp=").concat(Date.now()), "body=".concat(decodeURIComponent(JSON.stringify(params)), "&appid=swat_miniprogram&h5st=").concat(h5st, "&client=tjj_m&clientVersion=3.1.3"), {
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded; Charset=UTF-8",
                                "Host": "api.m.jd.com",
                                "Referer": "https://servicewechat.com/wxa5bf5ee667d91626/182/page-frame.html",
                                "Cookie": cookie,
                                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat'
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
