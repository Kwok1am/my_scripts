"use strict";
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
var cookie = '', res = '', UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, body, user, _a, _b, sign, e_1_1, k, _c, _d, t, readTime, e_2_1;
    var e_1, _e, e_2, _f;
    var _g, _h, _j, _k, _l, _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _o.sent();
                i = 0;
                _o.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 45];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                body = {
                    "sharePin": "",
                    "shareType": 1,
                    "channelLV": "",
                    "source": 2,
                    "riskDeviceParam": {
                        "eid": "",
                        "fp": "",
                        "sdkToken": "",
                        "token": "",
                        "jstub": "",
                        "appType": "2"
                    }
                };
                body.riskDeviceParam = JSON.stringify(body.riskDeviceParam);
                return [4 /*yield*/, api('login', body)];
            case 3:
                res = _o.sent();
                console.log(JSON.stringify(res));
                user = res.resultData.data;
                if (!user.realName) {
                    console.log("".concat(UserName, "\u672A\u5F00\u901A\u6E38\u620F"));
                    return [3 /*break*/, 44];
                }
                console.log('助力码:', user.sharePin);
                // 收果子
                console.log('树上果子:', user.treeInfo.fruitOnTree);
                body = {
                    "source": 2,
                    "sharePin": "",
                    "userId": user.userInfo,
                    "userToken": user.userToken,
                    "shareType": 1,
                    "channel": "",
                    "riskDeviceParam": "{\"eid\":\"\",\"fp\":\"\",\"sdkToken\":\"\",\"token\":\"\",\"jstub\":\"\",\"appType\":2}"
                };
                return [4 /*yield*/, api('harvest', body)];
            case 4:
                res = _o.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 5:
                _o.sent();
                if (res.resultData.code === '200') {
                    console.log('收果子成功，剩余：', res.resultData.data.treeInfo.fruit);
                    console.log("\u8DDD\u79BB".concat(res.resultData.data.treeInfo.treeName, "\u8FD8\u6709").concat(res.resultData.data.treeInfo.progressLeft));
                }
                // 签到
                body = {
                    "source": 2,
                    "riskDeviceParam": "{\"eid\":\"\",\"fp\":\"\",\"sdkToken\":\"\",\"token\":\"\",\"jstub\":\"\",\"appType\":4}"
                };
                return [4 /*yield*/, api('signIndex', body)];
            case 6:
                res = _o.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 7:
                _o.sent();
                if (!(((_g = res.resultData.data) === null || _g === void 0 ? void 0 : _g.canSign) === 2)) return [3 /*break*/, 16];
                console.log('今日未签到');
                _o.label = 8;
            case 8:
                _o.trys.push([8, 13, 14, 15]);
                _a = (e_1 = void 0, __values(res.resultData.data.result)), _b = _a.next();
                _o.label = 9;
            case 9:
                if (!!_b.done) return [3 /*break*/, 12];
                sign = _b.value;
                if (!(sign.signStatus === 0)) return [3 /*break*/, 11];
                console.log(sign);
                body = { "source": 2, "signDay": sign.signDays, "riskDeviceParam": "{\"eid\":\"\",\"fp\":\"\",\"sdkToken\":\"\",\"token\":\"\",\"jstub\":\"\",\"appType\":4}" };
                return [4 /*yield*/, api('signOne', body)];
            case 10:
                res = _o.sent();
                console.log('签到:', res);
                return [3 /*break*/, 12];
            case 11:
                _b = _a.next();
                return [3 /*break*/, 9];
            case 12: return [3 /*break*/, 15];
            case 13:
                e_1_1 = _o.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 15];
            case 14:
                try {
                    if (_b && !_b.done && (_e = _a["return"])) _e.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 15: return [3 /*break*/, 17];
            case 16:
                console.log('今日已签到');
                _o.label = 17;
            case 17: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)
                // 获取任务
            ];
            case 18:
                _o.sent();
                // 获取任务
                body = {
                    "source": 0,
                    "linkMissionIds": [],
                    "LinkMissionIdValues": [],
                    "riskDeviceParam": {
                        "eid": "",
                        "fp": "",
                        "sdkToken": "",
                        "token": "",
                        "jstub": "",
                        "appType": 2
                    }
                };
                k = 0;
                _o.label = 19;
            case 19:
                if (!(k < 3)) return [3 /*break*/, 44];
                console.log('Round:', k + 1);
                body.riskDeviceParam = JSON.stringify(body.riskDeviceParam);
                return [4 /*yield*/, api('dayWork', body)
                    // console.log('dayWork⬇️')
                    // console.log(JSON.stringify(res))
                ];
            case 20:
                res = _o.sent();
                // console.log('dayWork⬇️')
                // console.log(JSON.stringify(res))
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 21:
                // console.log('dayWork⬇️')
                // console.log(JSON.stringify(res))
                _o.sent();
                _o.label = 22;
            case 22:
                _o.trys.push([22, 39, 40, 41]);
                _c = (e_2 = void 0, __values(res.resultData.data)), _d = _c.next();
                _o.label = 23;
            case 23:
                if (!!_d.done) return [3 /*break*/, 38];
                t = _d.value;
                if (!(t.workStatus !== 2)) return [3 /*break*/, 37];
                if (!(t.workType === 1)) return [3 /*break*/, 26];
                // 时段签到
                body = {
                    "source": 2,
                    "workType": 1,
                    "opType": 2,
                    "mid": 0,
                    "riskDeviceParam": "{\"eid\":\"\",\"fp\":\"\",\"sdkToken\":\"\",\"token\":\"\",\"jstub\":\"\",\"appType\":4}"
                };
                return [4 /*yield*/, api('doWork', body)];
            case 24:
                _o.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 25:
                _o.sent();
                console.log('时段签到:', res);
                _o.label = 26;
            case 26:
                if (!(((_h = t.url) === null || _h === void 0 ? void 0 : _h.indexOf('readTime')) > -1)) return [3 /*break*/, 34];
                console.log(t.workName);
                if (!(t.workStatus === -1)) return [3 /*break*/, 29];
                body = { "source": 2, "workType": t.workType, "opType": 4, "mid": t.mid, "riskDeviceParam": "{\"eid\":\"\",\"fp\":\"\",\"sdkToken\":\"\",\"token\":\"\",\"jstub\":\"\",\"appType\":4}" };
                return [4 /*yield*/, api('doWork', body)];
            case 27:
                res = _o.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 28:
                _o.sent();
                console.log('领取任务:', (_k = (_j = res.resultData) === null || _j === void 0 ? void 0 : _j.data) === null || _k === void 0 ? void 0 : _k.opMsg);
                _o.label = 29;
            case 29:
                if (!(t.workStatus === 0)) return [3 /*break*/, 34];
                return [4 /*yield*/, mission('queryMissionReceiveAfterStatus', "%7B%22missionId%22:%22".concat(t.mid, "%22%7D"), t.url)];
            case 30:
                res = _o.sent();
                console.log('任务开始:', (_l = res.resultData) === null || _l === void 0 ? void 0 : _l.msg);
                readTime = t.url.split('readTime=')[1];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(readTime * 1000)];
            case 31:
                _o.sent();
                return [4 /*yield*/, mission('finishReadMission', "%7B%22missionId%22%3A%22".concat(t.mid, "%22%2C%22readTime%22%3A").concat(readTime, "%7D"), t.url)];
            case 32:
                res = _o.sent();
                console.log('任务完成:', (_m = res.resultData) === null || _m === void 0 ? void 0 : _m.msg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 33:
                _o.sent();
                _o.label = 34;
            case 34:
                if (!(t.workStatus === 1)) return [3 /*break*/, 37];
                body = {
                    "source": 0,
                    "workType": t.workType,
                    "opType": 2,
                    "mid": t.mid,
                    "riskDeviceParam": "{\"eid\":\"\",\"fp\":\"\",\"sdkToken\":\"\",\"token\":\"\",\"jstub\":\"\",\"appType\":2}"
                };
                return [4 /*yield*/, api('doWork', body)];
            case 35:
                res = _o.sent();
                console.log(t.workName, res.resultData.data.opMsg, res.resultData.data.prizeAmount);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 36:
                _o.sent();
                _o.label = 37;
            case 37:
                _d = _c.next();
                return [3 /*break*/, 23];
            case 38: return [3 /*break*/, 41];
            case 39:
                e_2_1 = _o.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 41];
            case 40:
                try {
                    if (_d && !_d.done && (_f = _c["return"])) _f.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 41: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 42:
                _o.sent();
                _o.label = 43;
            case 43:
                k++;
                return [3 /*break*/, 19];
            case 44:
                i++;
                return [3 /*break*/, 2];
            case 45: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (['doWork'].indexOf(fn) > -1) {
                        body = JSON.stringify(body);
                    }
                    else {
                        body = encodeURIComponent(JSON.stringify(body));
                    }
                    return [4 /*yield*/, axios_1["default"].post("https://ms.jr.jd.com/gw/generic/uc/h5/m/".concat(fn, "?_=").concat(Date.now() * 1000), "reqData=".concat(body), {
                            headers: {
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                                'Origin': 'https://uua.jr.jd.com',
                                'Host': 'ms.jr.jd.com',
                                'Referer': 'https://uua.jr.jd.com/uc-fe-wxgrowing/moneytree/index',
                                'Accept': 'application/json',
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
function mission(fn, reqData, referer) {
    return __awaiter(this, void 0, void 0, function () {
        var url, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://ms.jr.jd.com/gw/generic/mission/h5/m/' + fn + '?reqData=' + reqData;
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'ms.jr.jd.com',
                                'Origin': referer.split('.com/')[0] + '.com',
                                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; M2004J7AC Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045710 Mobile',
                                'X-Requested-With': 'com.jd.jrapp',
                                'Referer': referer.split('.com/')[0] + '.com',
                                'cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
