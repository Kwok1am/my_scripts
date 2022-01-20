"use strict";
/**
 * 京喜牧场兑换新品通知
 * 推送新上商品
 * cron: 0 * * * *
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
exports.__esModule = true;
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var fs_1 = require("fs");
var notify = require('./sendNotify'), jxmcToken = require('./utils/jd_jxmc.js').token;
var cookie = '', res = '', UserName;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, exist, items, message, token, _a, _b, good, allItems, arr, result, i, len, result_1, result_1_1, group, group_1, group_1_1, id, _c, _d, t, e_1_1, _e, _f, j;
    var e_2, _g, e_1, _h, e_3, _j, e_4, _k, e_5, _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)(10028)];
            case 1:
                _m.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _m.sent();
                cookie = cookiesArr[(0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, cookiesArr.length)];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                if (!(0, fs_1.existsSync)('./json/jxmc_stock.json')) {
                    (0, fs_1.writeFileSync)('./json/jxmc_stock.json', '{}', 'utf-8');
                }
                try {
                    exist = JSON.parse((0, fs_1.readFileSync)('./json/jxmc_stock.json', 'utf-8'));
                }
                catch (e) {
                    exist = {};
                }
                items = '', message = '';
                return [4 /*yield*/, jxmcToken(cookie)];
            case 3:
                token = _m.sent();
                return [4 /*yield*/, api('queryservice/GetGoodsListV2', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp', { activeid: 'jxmc_active_0001', activekey: 'null', jxmc_jstoken: token.farm_jstoken, timestamp: token.timestamp, phoneid: token.phoneid })];
            case 4:
                res = _m.sent();
                try {
                    for (_a = __values(res.data.goodslist), _b = _a.next(); !_b.done; _b = _a.next()) {
                        good = _b.value;
                        if (!Object.keys(exist).includes(good.prizepool)) {
                            items += good.prizepool + ',';
                            exist[good.prizepool] = {
                                id: good.prizepool,
                                egg: good.neednum
                            };
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_g = _a["return"])) _g.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                allItems = items;
                if (!items) return [3 /*break*/, 13];
                arr = items.split(',');
                arr.pop();
                items = '';
                result = [];
                for (i = 0, len = arr.length; i < len; i += 30) {
                    result.push(arr.slice(i, i + 30));
                }
                _m.label = 5;
            case 5:
                _m.trys.push([5, 11, 12, 13]);
                result_1 = __values(result), result_1_1 = result_1.next();
                _m.label = 6;
            case 6:
                if (!!result_1_1.done) return [3 /*break*/, 10];
                group = result_1_1.value;
                try {
                    for (group_1 = (e_3 = void 0, __values(group)), group_1_1 = group_1.next(); !group_1_1.done; group_1_1 = group_1.next()) {
                        id = group_1_1.value;
                        items += id + ',';
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (group_1_1 && !group_1_1.done && (_j = group_1["return"])) _j.call(group_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                return [4 /*yield*/, getEgg(items)];
            case 7:
                res = _m.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 8:
                _m.sent();
                try {
                    for (_c = (e_4 = void 0, __values(res.result)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        t = _d.value;
                        exist[t.active].name = t.prizes[0].Name;
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_k = _c["return"])) _k.call(_c);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                items = '';
                _m.label = 9;
            case 9:
                result_1_1 = result_1.next();
                return [3 /*break*/, 6];
            case 10: return [3 /*break*/, 13];
            case 11:
                e_1_1 = _m.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 13];
            case 12:
                try {
                    if (result_1_1 && !result_1_1.done && (_h = result_1["return"])) _h.call(result_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 13:
                console.log(exist);
                (0, fs_1.writeFileSync)('./json/jxmc_stock.json', JSON.stringify(exist, null, 2), 'utf-8');
                try {
                    for (_e = __values(Object.keys(exist)), _f = _e.next(); !_f.done; _f = _e.next()) {
                        j = _f.value;
                        if (allItems.indexOf(j) > -1) {
                            message += exist[j].name + '\t' + exist[j].egg + '\n';
                        }
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_l = _e["return"])) _l.call(_e);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
                console.log(message);
                if (!message) return [3 /*break*/, 15];
                return [4 /*yield*/, notify.sendNotify('京喜牧场兑换', message)];
            case 14:
                _m.sent();
                _m.label = 15;
            case 15: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    if (params === void 0) { params = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var url, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/jxmc/".concat(fn, "?channel=7&sceneid=1001&_stk=").concat(encodeURIComponent(stk), "&_ste=1&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls");
                    url = (0, TS_USER_AGENTS_1.h5st)(url, stk, params, 10028);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'Accept': '*/*',
                                'Connection': 'keep-alive',
                                'User-Agent': "jdpingou;iPhone;5.14.2;".concat((0, TS_USER_AGENTS_1.getRandomNumberByRange)(12, 16), ".").concat((0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, 3), ";").concat((0, TS_USER_AGENTS_1.randomString)(40), ";"),
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'Referer': 'https://st.jingxi.com/',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, JSON.parse(data.match(/jsonpCBK.?\((.*)/)[1])];
            }
        });
    });
}
function getEgg(items) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    items = items.substr(0, items.length - 1);
                    return [4 /*yield*/, axios_1["default"].get("https://m.jingxi.com/active/queryprizedetails?actives=".concat(items, "&_=").concat(Date.now(), "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls"), {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'Accept': '*/*',
                                'Connection': 'keep-alive',
                                'User-Agent': "jdpingou;iPhone;5.14.2;".concat((0, TS_USER_AGENTS_1.getRandomNumberByRange)(12, 16), ".").concat((0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, 3), ";").concat((0, TS_USER_AGENTS_1.randomString)(40), ";"),
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'Referer': 'https://st.jingxi.com/',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, JSON.parse(data.match(/jsonpCBK.?\(([\s\S]*)\);/)[1])];
            }
        });
    });
}
