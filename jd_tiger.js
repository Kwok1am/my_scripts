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
    var cookiesArr, _a, _b, _c, index, value, flag, _d, _e, c, cardId, cardCount, uuid, e_1_1, e_2_1, _f, _g, _h, index, value, myCards, _j, _k, _i, key, cardId, cardCount, _l, _m, _o, key_1, haoxinren, e_3, e_4_1, _p, _q, _r, index, value, _s, _t, tab, taskGroupId, _u, _v, t, i, sleep, e_5_1, e_6_1, e_7, e_8_1, _w, _x, _y, index, value, temp, shareCodes_1, shareCodes_1_1, code, e_9_1, e_10, e_11_1, _z, _0, _1, index, value, lotteryNum, i, e_12, e_13_1;
    var e_2, _2, e_1, _3, e_4, _4, e_8, _5, e_6, _6, e_5, _7, e_11, _8, e_9, _9, e_13, _10;
    var _11, _12;
    return __generator(this, function (_13) {
        switch (_13.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _13.sent();
                if (process.argv[2]) {
                    cookiesArr = [decodeURIComponent(process.argv[2])];
                    console.log("\u6536\u5230Cookie\uFF1A".concat(decodeURIComponent(cookiesArr[0])));
                }
                _13.label = 2;
            case 2:
                _13.trys.push([2, 16, 17, 18]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _13.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 15];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api({ "apiMapping": "/api/card/list" })];
            case 4:
                res = _13.sent();
                cards[decodeURIComponent(UserName)] = {};
                flag = true;
                _13.label = 5;
            case 5:
                _13.trys.push([5, 12, 13, 14]);
                _d = (e_1 = void 0, __values(res.data.cardList)), _e = _d.next();
                _13.label = 6;
            case 6:
                if (!!_e.done) return [3 /*break*/, 11];
                c = _e.value;
                cardId = c.cardId, cardCount = c.count;
                console.log(c.cardName, cardId, cardCount);
                uuid = '';
                if (!(cardCount > 1 && flag)) return [3 /*break*/, 9];
                return [4 /*yield*/, api({ "cardId": cardId, "apiMapping": "/api/card/share" })];
            case 7:
                res = _13.sent();
                if (res.msg === '您今天赠送卡片次数已用完') {
                    console.log('您今天赠送卡片次数已用完');
                    flag = false;
                }
                else {
                    uuid = res.data;
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 8:
                _13.sent();
                _13.label = 9;
            case 9:
                cards[decodeURIComponent(UserName)][cardId] = { cardCount: cardCount, uuid: uuid };
                _13.label = 10;
            case 10:
                _e = _d.next();
                return [3 /*break*/, 6];
            case 11: return [3 /*break*/, 14];
            case 12:
                e_1_1 = _13.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 14];
            case 13:
                try {
                    if (_e && !_e.done && (_3 = _d["return"])) _3.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 14:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 15: return [3 /*break*/, 18];
            case 16:
                e_2_1 = _13.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 18];
            case 17:
                try {
                    if (_b && !_b.done && (_2 = _a["return"])) _2.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 18:
                console.log(cards);
                _13.label = 19;
            case 19:
                _13.trys.push([19, 32, 33, 34]);
                _f = __values(cookiesArr.entries()), _g = _f.next();
                _13.label = 20;
            case 20:
                if (!!_g.done) return [3 /*break*/, 31];
                _h = __read(_g.value, 2), index = _h[0], value = _h[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                _13.label = 21;
            case 21:
                _13.trys.push([21, 29, , 30]);
                myCards = cards[decodeURIComponent(UserName)];
                _j = [];
                for (_k in myCards)
                    _j.push(_k);
                _i = 0;
                _13.label = 22;
            case 22:
                if (!(_i < _j.length)) return [3 /*break*/, 28];
                key = _j[_i];
                cardId = key, cardCount = myCards[key]["cardCount"];
                console.log(cardId, cardCount);
                if (!(cardCount === 0)) return [3 /*break*/, 27];
                console.log('卡片不足');
                _l = [];
                for (_m in cards)
                    _l.push(_m);
                _o = 0;
                _13.label = 23;
            case 23:
                if (!(_o < _l.length)) return [3 /*break*/, 27];
                key_1 = _l[_o];
                if (!(decodeURIComponent(key_1) !== UserName && cards[key_1][cardId]["cardCount"] > 1 && cards[key_1][cardId]["uuid"])) return [3 /*break*/, 26];
                haoxinren = decodeURIComponent(key_1);
                console.log('好心人', haoxinren, cardId);
                return [4 /*yield*/, api({ "uuid": cards[haoxinren][cardId]["uuid"], "apiMapping": "/api/card/receiveCard" })];
            case 24:
                res = _13.sent();
                try {
                    console.log("\u8D26\u53F7".concat(index + 1, " \u6536\u5230\u597D\u5FC3\u4EBA ").concat(haoxinren, " \u5361\u7247 ").concat(res.data.cardName, " 1\u5F20"));
                }
                catch (e) {
                    console.log('赠送卡片出错', (0, TS_USER_AGENTS_1.obj2str)(res));
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 25:
                _13.sent();
                cards[encodeURIComponent(UserName)][cardId]["cardCount"]++;
                cards[key_1][cardId]["cardCount"]--;
                _13.label = 26;
            case 26:
                _o++;
                return [3 /*break*/, 23];
            case 27:
                _i++;
                return [3 /*break*/, 22];
            case 28: return [3 /*break*/, 30];
            case 29:
                e_3 = _13.sent();
                console.log('黑号？', e_3);
                return [3 /*break*/, 30];
            case 30:
                _g = _f.next();
                return [3 /*break*/, 20];
            case 31: return [3 /*break*/, 34];
            case 32:
                e_4_1 = _13.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 34];
            case 33:
                try {
                    if (_g && !_g.done && (_4 = _f["return"])) _4.call(_f);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 34:
                console.log(cards);
                _13.label = 35;
            case 35:
                _13.trys.push([35, 69, 70, 71]);
                _p = __values(cookiesArr.entries()), _q = _p.next();
                _13.label = 36;
            case 36:
                if (!!_q.done) return [3 /*break*/, 68];
                _r = __read(_q.value, 2), index = _r[0], value = _r[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                _13.label = 37;
            case 37:
                _13.trys.push([37, 66, , 67]);
                return [4 /*yield*/, api({ "apiMapping": "/api/task/support/getShareId" })];
            case 38:
                res = _13.sent();
                console.log('助力码：', res.data);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 39:
                _13.sent();
                shareCodesSelf.push(res.data);
                return [4 /*yield*/, api({ "apiMapping": "/api/task/support/list" })];
            case 40:
                res = _13.sent();
                console.log('收到助力：', res.data.supportedNum);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 41:
                _13.sent();
                return [4 /*yield*/, api({ "apiMapping": "/api/task/brand/tabs" })];
            case 42:
                res = _13.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 43:
                _13.sent();
                _13.label = 44;
            case 44:
                _13.trys.push([44, 63, 64, 65]);
                _s = (e_6 = void 0, __values(res.data)), _t = _s.next();
                _13.label = 45;
            case 45:
                if (!!_t.done) return [3 /*break*/, 62];
                tab = _t.value;
                taskGroupId = tab.taskGroupId;
                return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "apiMapping": "/api/task/brand/getTaskList" })];
            case 46:
                res = _13.sent();
                _13.label = 47;
            case 47:
                _13.trys.push([47, 59, 60, 61]);
                _u = (e_5 = void 0, __values(res.data)), _v = _u.next();
                _13.label = 48;
            case 48:
                if (!!_v.done) return [3 /*break*/, 58];
                t = _v.value;
                i = t.finishNum;
                _13.label = 49;
            case 49:
                if (!(i < t.totalNum)) return [3 /*break*/, 57];
                return [4 /*yield*/, getTaskDetail(taskGroupId)];
            case 50:
                res = _13.sent();
                if (!res) return [3 /*break*/, 56];
                console.log(taskGroupId, res.taskId, res.taskItemId, res.taskType, res.taskItemName);
                sleep = res.browseTime ? res.browseTime * 1000 : 1000;
                return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "taskId": res.taskId, "taskItemId": res.taskItemId, "apiMapping": "/api/task/brand/doTask" })];
            case 51:
                res = _13.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(sleep)];
            case 52:
                _13.sent();
                if (!(res.data.taskType === 'BROWSE_TASK')) return [3 /*break*/, 55];
                return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "taskId": res.data.taskId, "taskItemId": res.data.taskItemId, "timestamp": res.data.timeStamp, "apiMapping": "/api/task/brand/getReward" })];
            case 53:
                res = _13.sent();
                console.log('任务完成，积分：', res.data.integral, '，京豆：', res.data.jbean);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 54:
                _13.sent();
                return [3 /*break*/, 56];
            case 55:
                if (res.data.taskType === 'FOLLOW_SHOP_TASK') {
                    // console.log('任务完成，获得：', res.data.rewardInfoVo?.integral, res.data.rewardInfoVo?.jbean)
                    console.log(res.data.rewardInfoVo);
                }
                _13.label = 56;
            case 56:
                i++;
                return [3 /*break*/, 49];
            case 57:
                _v = _u.next();
                return [3 /*break*/, 48];
            case 58: return [3 /*break*/, 61];
            case 59:
                e_5_1 = _13.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 61];
            case 60:
                try {
                    if (_v && !_v.done && (_7 = _u["return"])) _7.call(_u);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 61:
                _t = _s.next();
                return [3 /*break*/, 45];
            case 62: return [3 /*break*/, 65];
            case 63:
                e_6_1 = _13.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 65];
            case 64:
                try {
                    if (_t && !_t.done && (_6 = _s["return"])) _6.call(_s);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 65: return [3 /*break*/, 67];
            case 66:
                e_7 = _13.sent();
                console.log('黑号？', e_7);
                return [3 /*break*/, 67];
            case 67:
                _q = _p.next();
                return [3 /*break*/, 36];
            case 68: return [3 /*break*/, 71];
            case 69:
                e_8_1 = _13.sent();
                e_8 = { error: e_8_1 };
                return [3 /*break*/, 71];
            case 70:
                try {
                    if (_q && !_q.done && (_5 = _p["return"])) _5.call(_p);
                }
                finally { if (e_8) throw e_8.error; }
                return [7 /*endfinally*/];
            case 71:
                _13.trys.push([71, 89, 90, 91]);
                _w = __values(cookiesArr.entries()), _x = _w.next();
                _13.label = 72;
            case 72:
                if (!!_x.done) return [3 /*break*/, 88];
                _y = __read(_x.value, 2), index = _y[0], value = _y[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _13.label = 73;
            case 73:
                _13.trys.push([73, 86, , 87]);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('tiger', 30)];
            case 74:
                temp = _13.sent();
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 76];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('tiger')];
            case 75:
                shareCodesHW = _13.sent();
                _13.label = 76;
            case 76:
                index === 0
                    ? shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], __read(shareCodesHW), false), __read(shareCodesSelf), false), __read(temp), false)))
                    : shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false), __read(temp), false)));
                _13.label = 77;
            case 77:
                _13.trys.push([77, 83, 84, 85]);
                shareCodes_1 = (e_9 = void 0, __values(shareCodes)), shareCodes_1_1 = shareCodes_1.next();
                _13.label = 78;
            case 78:
                if (!!shareCodes_1_1.done) return [3 /*break*/, 82];
                code = shareCodes_1_1.value;
                console.log("\u8D26\u53F7".concat(index + 1, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodesSelf.includes(code) ? '(内部)' : ''));
                return [4 /*yield*/, api({ "shareId": code, "apiMapping": "/api/task/support/doSupport" })];
            case 79:
                res = _13.sent();
                if (res.data.status === 1) {
                    !res.data.supporterPrize
                        ? console.log('不助力自己')
                        : console.log('助力成功，京豆：', (_11 = res.data.supporterPrize) === null || _11 === void 0 ? void 0 : _11.beans, '，积分：', (_12 = res.data.supporterPrize) === null || _12 === void 0 ? void 0 : _12.score);
                }
                else if (res.data.status === 7) {
                    console.log('上限');
                    return [3 /*break*/, 82];
                }
                else if (res.data.status === 3) {
                    console.log('已助力过');
                }
                else {
                    console.log('其他情况', res.data.status);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 80:
                _13.sent();
                _13.label = 81;
            case 81:
                shareCodes_1_1 = shareCodes_1.next();
                return [3 /*break*/, 78];
            case 82: return [3 /*break*/, 85];
            case 83:
                e_9_1 = _13.sent();
                e_9 = { error: e_9_1 };
                return [3 /*break*/, 85];
            case 84:
                try {
                    if (shareCodes_1_1 && !shareCodes_1_1.done && (_9 = shareCodes_1["return"])) _9.call(shareCodes_1);
                }
                finally { if (e_9) throw e_9.error; }
                return [7 /*endfinally*/];
            case 85: return [3 /*break*/, 87];
            case 86:
                e_10 = _13.sent();
                console.log('黑号？', e_10);
                return [3 /*break*/, 87];
            case 87:
                _x = _w.next();
                return [3 /*break*/, 72];
            case 88: return [3 /*break*/, 91];
            case 89:
                e_11_1 = _13.sent();
                e_11 = { error: e_11_1 };
                return [3 /*break*/, 91];
            case 90:
                try {
                    if (_x && !_x.done && (_8 = _w["return"])) _8.call(_w);
                }
                finally { if (e_11) throw e_11.error; }
                return [7 /*endfinally*/];
            case 91:
                _13.trys.push([91, 103, 104, 105]);
                _z = __values(cookiesArr.entries()), _0 = _z.next();
                _13.label = 92;
            case 92:
                if (!!_0.done) return [3 /*break*/, 102];
                _1 = __read(_0.value, 2), index = _1[0], value = _1[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                _13.label = 93;
            case 93:
                _13.trys.push([93, 100, , 101]);
                return [4 /*yield*/, api({ "apiMapping": "/api/index/indexInfo" })];
            case 94:
                res = _13.sent();
                lotteryNum = res.data.lotteryNum;
                console.log('抽奖次数：', lotteryNum);
                i = 0;
                _13.label = 95;
            case 95:
                if (!(i < lotteryNum)) return [3 /*break*/, 99];
                return [4 /*yield*/, api({ "apiMapping": "/api/lottery/lottery" })];
            case 96:
                res = _13.sent();
                console.log('抽奖', i + 1, '/', lotteryNum, res.data.prizeName);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 97:
                _13.sent();
                _13.label = 98;
            case 98:
                i++;
                return [3 /*break*/, 95];
            case 99: return [3 /*break*/, 101];
            case 100:
                e_12 = _13.sent();
                console.log('黑号？', e_12);
                return [3 /*break*/, 101];
            case 101:
                _0 = _z.next();
                return [3 /*break*/, 92];
            case 102: return [3 /*break*/, 105];
            case 103:
                e_13_1 = _13.sent();
                e_13 = { error: e_13_1 };
                return [3 /*break*/, 105];
            case 104:
                try {
                    if (_0 && !_0.done && (_10 = _z["return"])) _10.call(_z);
                }
                finally { if (e_13) throw e_13.error; }
                return [7 /*endfinally*/];
            case 105: return [2 /*return*/];
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
        var e_14, _c;
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
                    catch (e_14_1) { e_14 = { error: e_14_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                        }
                        finally { if (e_14) throw e_14.error; }
                    }
                    return [2 /*return*/, ''];
            }
        });
    });
}
