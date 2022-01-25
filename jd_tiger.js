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
var sendNotify_1 = require("./sendNotify");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', shareCodes = [], UserName = '', shareCodesSelf = [], shareCodesHW = [];
var cards = {};
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _a, _b, _c, index, value, flag, _d, _e, c, cardId, cardCount, uuid, e_1_1, e_2_1, _f, _g, _h, index, value, myCards, _j, _k, _i, key, cardId, cardCount, _l, _m, _o, key_1, haoxinren, e_3, e_4_1, _p, _q, _r, index, value, pageNum, _s, _t, t, e_5_1, _u, _v, tab, taskGroupId, _w, _x, t, i, sleep, e_6_1, e_7_1, e_8, e_9_1, _y, _z, _0, index, value, temp, shareCodes_1, shareCodes_1_1, code, e_10_1, e_11, e_12_1, _1, _2, _3, index, value, lotteryNum, i, e_13, e_14_1;
    var e_2, _4, e_1, _5, e_4, _6, e_9, _7, e_5, _8, e_7, _9, e_6, _10, e_12, _11, e_10, _12, e_14, _13;
    var _14, _15, _16, _17, _18, _19, _20, _21, _22, _23;
    return __generator(this, function (_24) {
        switch (_24.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _24.sent();
                if (process.argv[2]) {
                    cookiesArr = [decodeURIComponent(process.argv[2])];
                    console.log("\u6536\u5230Cookie\uFF1A".concat(decodeURIComponent(cookiesArr[0])));
                }
                _24.label = 2;
            case 2:
                _24.trys.push([2, 16, 17, 18]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _24.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 15];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api({ "apiMapping": "/api/card/list" })];
            case 4:
                res = _24.sent();
                cards[decodeURIComponent(UserName)] = {};
                flag = true;
                _24.label = 5;
            case 5:
                _24.trys.push([5, 12, 13, 14]);
                _d = (e_1 = void 0, __values(res.data.cardList)), _e = _d.next();
                _24.label = 6;
            case 6:
                if (!!_e.done) return [3 /*break*/, 11];
                c = _e.value;
                cardId = c.cardId, cardCount = c.count;
                console.log(c.cardName, cardId, cardCount);
                uuid = '';
                if (!(cardCount > 1 && flag)) return [3 /*break*/, 9];
                return [4 /*yield*/, api({ "cardId": cardId, "apiMapping": "/api/card/share" })];
            case 7:
                res = _24.sent();
                if (res.msg === '您今天赠送卡片次数已用完') {
                    console.log('您今天赠送卡片次数已用完');
                    flag = false;
                }
                else {
                    uuid = res.data;
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 8:
                _24.sent();
                _24.label = 9;
            case 9:
                cards[decodeURIComponent(UserName)][cardId] = { cardCount: cardCount, uuid: uuid };
                _24.label = 10;
            case 10:
                _e = _d.next();
                return [3 /*break*/, 6];
            case 11: return [3 /*break*/, 14];
            case 12:
                e_1_1 = _24.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 14];
            case 13:
                try {
                    if (_e && !_e.done && (_5 = _d["return"])) _5.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 14:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 15: return [3 /*break*/, 18];
            case 16:
                e_2_1 = _24.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 18];
            case 17:
                try {
                    if (_b && !_b.done && (_4 = _a["return"])) _4.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 18:
                // 内部互赠
                console.log(cards);
                _24.label = 19;
            case 19:
                _24.trys.push([19, 32, 33, 34]);
                _f = __values(cookiesArr.entries()), _g = _f.next();
                _24.label = 20;
            case 20:
                if (!!_g.done) return [3 /*break*/, 31];
                _h = __read(_g.value, 2), index = _h[0], value = _h[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                _24.label = 21;
            case 21:
                _24.trys.push([21, 29, , 30]);
                myCards = cards[decodeURIComponent(UserName)];
                _j = [];
                for (_k in myCards)
                    _j.push(_k);
                _i = 0;
                _24.label = 22;
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
                _24.label = 23;
            case 23:
                if (!(_o < _l.length)) return [3 /*break*/, 27];
                key_1 = _l[_o];
                if (!(decodeURIComponent(key_1) !== UserName && cards[key_1][cardId]["cardCount"] > 1 && cards[key_1][cardId]["uuid"])) return [3 /*break*/, 26];
                haoxinren = decodeURIComponent(key_1);
                console.log('好心人', haoxinren, cardId);
                return [4 /*yield*/, api({ "uuid": cards[haoxinren][cardId]["uuid"], "apiMapping": "/api/card/receiveCard" })];
            case 24:
                res = _24.sent();
                try {
                    console.log("\u8D26\u53F7".concat(index + 1, " \u6536\u5230\u597D\u5FC3\u4EBA ").concat(haoxinren, " \u5361\u7247 ").concat(res.data.cardName, " 1\u5F20"));
                }
                catch (e) {
                    console.log('赠送卡片出错', (0, TS_USER_AGENTS_1.obj2str)(res));
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 25:
                _24.sent();
                cards[encodeURIComponent(UserName)][cardId]["cardCount"]++;
                cards[key_1][cardId]["cardCount"]--;
                _24.label = 26;
            case 26:
                _o++;
                return [3 /*break*/, 23];
            case 27:
                _i++;
                return [3 /*break*/, 22];
            case 28: return [3 /*break*/, 30];
            case 29:
                e_3 = _24.sent();
                console.log('黑号？', e_3);
                return [3 /*break*/, 30];
            case 30:
                _g = _f.next();
                return [3 /*break*/, 20];
            case 31: return [3 /*break*/, 34];
            case 32:
                e_4_1 = _24.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 34];
            case 33:
                try {
                    if (_g && !_g.done && (_6 = _f["return"])) _6.call(_f);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 34:
                console.log(cards);
                _24.label = 35;
            case 35:
                _24.trys.push([35, 81, 82, 83]);
                _p = __values(cookiesArr.entries()), _q = _p.next();
                _24.label = 36;
            case 36:
                if (!!_q.done) return [3 /*break*/, 80];
                _r = __read(_q.value, 2), index = _r[0], value = _r[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                _24.label = 37;
            case 37:
                _24.trys.push([37, 78, , 79]);
                pageNum = 1;
                _24.label = 38;
            case 38:
                if (!1) return [3 /*break*/, 49];
                return [4 /*yield*/, api({ pageNum: pageNum, apiMapping: "/api/record/prizeRecord" })];
            case 39:
                res = _24.sent();
                console.log('正在加载第', pageNum, '页中奖记录', res.data.list.length);
                _24.label = 40;
            case 40:
                _24.trys.push([40, 45, 46, 47]);
                _s = (e_5 = void 0, __values(res.data.list)), _t = _s.next();
                _24.label = 41;
            case 41:
                if (!!_t.done) return [3 /*break*/, 44];
                t = _t.value;
                if (!(t.prizeType === 1)) return [3 /*break*/, 43];
                console.log('获得实物：', t.content);
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)("萌虎", "\u8D26\u53F7".concat(index + 1, " ").concat(UserName, "\n\u83B7\u5F97\u5B9E\u7269\uFF1A").concat(t.content))];
            case 42:
                _24.sent();
                _24.label = 43;
            case 43:
                _t = _s.next();
                return [3 /*break*/, 41];
            case 44: return [3 /*break*/, 47];
            case 45:
                e_5_1 = _24.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 47];
            case 46:
                try {
                    if (_t && !_t.done && (_8 = _s["return"])) _8.call(_s);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 47:
                pageNum++;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 48:
                _24.sent();
                if (res.data.list.length < 10)
                    return [3 /*break*/, 49];
                return [3 /*break*/, 38];
            case 49: return [4 /*yield*/, api({ "apiMapping": "/api/task/support/getShareId" })];
            case 50:
                // 任务
                res = _24.sent();
                console.log('助力码：', res.data);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 51:
                _24.sent();
                shareCodesSelf.push(res.data);
                return [4 /*yield*/, api({ "apiMapping": "/api/task/support/list" })];
            case 52:
                res = _24.sent();
                console.log('收到助力：', res.data.supportedNum);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 53:
                _24.sent();
                return [4 /*yield*/, api({ "apiMapping": "/api/task/brand/tabs" })];
            case 54:
                res = _24.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 55:
                _24.sent();
                _24.label = 56;
            case 56:
                _24.trys.push([56, 75, 76, 77]);
                _u = (e_7 = void 0, __values(res.data)), _v = _u.next();
                _24.label = 57;
            case 57:
                if (!!_v.done) return [3 /*break*/, 74];
                tab = _v.value;
                taskGroupId = tab.taskGroupId;
                return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "apiMapping": "/api/task/brand/getTaskList" })];
            case 58:
                res = _24.sent();
                _24.label = 59;
            case 59:
                _24.trys.push([59, 71, 72, 73]);
                _w = (e_6 = void 0, __values(res.data)), _x = _w.next();
                _24.label = 60;
            case 60:
                if (!!_x.done) return [3 /*break*/, 70];
                t = _x.value;
                i = t.finishNum;
                _24.label = 61;
            case 61:
                if (!(i < t.totalNum)) return [3 /*break*/, 69];
                return [4 /*yield*/, getTaskDetail(taskGroupId)];
            case 62:
                res = _24.sent();
                if (!res) return [3 /*break*/, 68];
                console.log(taskGroupId, res.taskId, res.taskItemId, res.taskType, res.taskItemName);
                sleep = res.browseTime ? res.browseTime * 1000 : 1000;
                return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "taskId": res.taskId, "taskItemId": res.taskItemId, "apiMapping": "/api/task/brand/doTask" })];
            case 63:
                res = _24.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(sleep)];
            case 64:
                _24.sent();
                if (!(res.data.taskType === 'BROWSE_TASK')) return [3 /*break*/, 67];
                return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "taskId": res.data.taskId, "taskItemId": res.data.taskItemId, "timestamp": res.data.timeStamp, "apiMapping": "/api/task/brand/getReward" })];
            case 65:
                res = _24.sent();
                console.log('任务完成，积分：', res.data.integral, '，京豆：', res.data.jbean);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 66:
                _24.sent();
                return [3 /*break*/, 68];
            case 67:
                if (res.data.taskType === 'FOLLOW_SHOP_TASK') {
                    if (((_15 = (_14 = res.data) === null || _14 === void 0 ? void 0 : _14.rewardInfoVo) === null || _15 === void 0 ? void 0 : _15.integral) && ((_17 = (_16 = res.data) === null || _16 === void 0 ? void 0 : _16.rewardInfoVo) === null || _17 === void 0 ? void 0 : _17.jbean))
                        console.log('任务完成，积分：', (_19 = (_18 = res.data) === null || _18 === void 0 ? void 0 : _18.rewardInfoVo) === null || _19 === void 0 ? void 0 : _19.integral, '，京豆：', (_21 = (_20 = res.data) === null || _20 === void 0 ? void 0 : _20.rewardInfoVo) === null || _21 === void 0 ? void 0 : _21.jbean);
                    else
                        console.log('任务完成，空气');
                }
                _24.label = 68;
            case 68:
                i++;
                return [3 /*break*/, 61];
            case 69:
                _x = _w.next();
                return [3 /*break*/, 60];
            case 70: return [3 /*break*/, 73];
            case 71:
                e_6_1 = _24.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 73];
            case 72:
                try {
                    if (_x && !_x.done && (_10 = _w["return"])) _10.call(_w);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 73:
                _v = _u.next();
                return [3 /*break*/, 57];
            case 74: return [3 /*break*/, 77];
            case 75:
                e_7_1 = _24.sent();
                e_7 = { error: e_7_1 };
                return [3 /*break*/, 77];
            case 76:
                try {
                    if (_v && !_v.done && (_9 = _u["return"])) _9.call(_u);
                }
                finally { if (e_7) throw e_7.error; }
                return [7 /*endfinally*/];
            case 77: return [3 /*break*/, 79];
            case 78:
                e_8 = _24.sent();
                console.log('黑号？', e_8);
                return [3 /*break*/, 79];
            case 79:
                _q = _p.next();
                return [3 /*break*/, 36];
            case 80: return [3 /*break*/, 83];
            case 81:
                e_9_1 = _24.sent();
                e_9 = { error: e_9_1 };
                return [3 /*break*/, 83];
            case 82:
                try {
                    if (_q && !_q.done && (_7 = _p["return"])) _7.call(_p);
                }
                finally { if (e_9) throw e_9.error; }
                return [7 /*endfinally*/];
            case 83:
                _24.trys.push([83, 101, 102, 103]);
                _y = __values(cookiesArr.entries()), _z = _y.next();
                _24.label = 84;
            case 84:
                if (!!_z.done) return [3 /*break*/, 100];
                _0 = __read(_z.value, 2), index = _0[0], value = _0[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _24.label = 85;
            case 85:
                _24.trys.push([85, 98, , 99]);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('tiger', 30)];
            case 86:
                temp = _24.sent();
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 88];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('tiger')];
            case 87:
                shareCodesHW = _24.sent();
                _24.label = 88;
            case 88:
                index === 0
                    ? shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], __read(shareCodesHW), false), __read(shareCodesSelf), false), __read(temp), false)))
                    : shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false), __read(temp), false)));
                _24.label = 89;
            case 89:
                _24.trys.push([89, 95, 96, 97]);
                shareCodes_1 = (e_10 = void 0, __values(shareCodes)), shareCodes_1_1 = shareCodes_1.next();
                _24.label = 90;
            case 90:
                if (!!shareCodes_1_1.done) return [3 /*break*/, 94];
                code = shareCodes_1_1.value;
                console.log("\u8D26\u53F7".concat(index + 1, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodesSelf.includes(code) ? '(内部)' : ''));
                return [4 /*yield*/, api({ "shareId": code, "apiMapping": "/api/task/support/doSupport" })];
            case 91:
                res = _24.sent();
                if (res.data.status === 1) {
                    !res.data.supporterPrize
                        ? console.log('不助力自己')
                        : console.log('助力成功，京豆：', (_22 = res.data.supporterPrize) === null || _22 === void 0 ? void 0 : _22.beans, '，积分：', (_23 = res.data.supporterPrize) === null || _23 === void 0 ? void 0 : _23.score);
                }
                else if (res.data.status === 7) {
                    console.log('上限');
                    return [3 /*break*/, 94];
                }
                else if (res.data.status === 3) {
                    console.log('已助力过');
                }
                else {
                    console.log('其他情况', res.data.status);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 92:
                _24.sent();
                _24.label = 93;
            case 93:
                shareCodes_1_1 = shareCodes_1.next();
                return [3 /*break*/, 90];
            case 94: return [3 /*break*/, 97];
            case 95:
                e_10_1 = _24.sent();
                e_10 = { error: e_10_1 };
                return [3 /*break*/, 97];
            case 96:
                try {
                    if (shareCodes_1_1 && !shareCodes_1_1.done && (_12 = shareCodes_1["return"])) _12.call(shareCodes_1);
                }
                finally { if (e_10) throw e_10.error; }
                return [7 /*endfinally*/];
            case 97: return [3 /*break*/, 99];
            case 98:
                e_11 = _24.sent();
                console.log('黑号？', e_11);
                return [3 /*break*/, 99];
            case 99:
                _z = _y.next();
                return [3 /*break*/, 84];
            case 100: return [3 /*break*/, 103];
            case 101:
                e_12_1 = _24.sent();
                e_12 = { error: e_12_1 };
                return [3 /*break*/, 103];
            case 102:
                try {
                    if (_z && !_z.done && (_11 = _y["return"])) _11.call(_y);
                }
                finally { if (e_12) throw e_12.error; }
                return [7 /*endfinally*/];
            case 103:
                _24.trys.push([103, 115, 116, 117]);
                _1 = __values(cookiesArr.entries()), _2 = _1.next();
                _24.label = 104;
            case 104:
                if (!!_2.done) return [3 /*break*/, 114];
                _3 = __read(_2.value, 2), index = _3[0], value = _3[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                _24.label = 105;
            case 105:
                _24.trys.push([105, 112, , 113]);
                return [4 /*yield*/, api({ "apiMapping": "/api/index/indexInfo" })];
            case 106:
                res = _24.sent();
                lotteryNum = res.data.lotteryNum;
                console.log('抽奖次数：', lotteryNum);
                i = 0;
                _24.label = 107;
            case 107:
                if (!(i < lotteryNum)) return [3 /*break*/, 111];
                return [4 /*yield*/, api({ "apiMapping": "/api/lottery/lottery" })];
            case 108:
                res = _24.sent();
                console.log('抽奖', i + 1, '/', lotteryNum, res.data.prizeName);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 109:
                _24.sent();
                _24.label = 110;
            case 110:
                i++;
                return [3 /*break*/, 107];
            case 111: return [3 /*break*/, 113];
            case 112:
                e_13 = _24.sent();
                console.log('黑号？', e_13);
                return [3 /*break*/, 113];
            case 113:
                _2 = _1.next();
                return [3 /*break*/, 104];
            case 114: return [3 /*break*/, 117];
            case 115:
                e_14_1 = _24.sent();
                e_14 = { error: e_14_1 };
                return [3 /*break*/, 117];
            case 116:
                try {
                    if (_2 && !_2.done && (_13 = _1["return"])) _13.call(_1);
                }
                finally { if (e_14) throw e_14.error; }
                return [7 /*endfinally*/];
            case 117: return [2 /*return*/];
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
        var e_15, _c;
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
                    catch (e_15_1) { e_15 = { error: e_15_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                        }
                        finally { if (e_15) throw e_15.error; }
                    }
                    return [2 /*return*/, ''];
            }
        });
    });
}
