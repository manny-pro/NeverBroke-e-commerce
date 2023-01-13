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
exports.__esModule = true;
exports.register = exports.auth = exports.deleteById = exports.updateById = exports.create = exports.getById = exports.getAll = void 0;
var user_1 = require("../database/models/user");
var users_service_1 = require("../services/users.service");
exports.create = users_service_1.create;
var users_service_2 = require("../services/users.service");
exports.deleteById = users_service_2.deleteById;
var users_service_3 = require("../services/users.service");
exports.updateById = users_service_3.updateById;
var jsonwebtoken_1 = require("jsonwebtoken");
var console_1 = require("console");
function auth(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var username, password, Users, User, accessToken;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console_1["default"].log(req.query);
                    username = req.query.username;
                    password = req.query.password;
                    Users = {
                        username: username,
                        password: password
                    };
                    if (!username) {
                        username = 'undefined';
                    }
                    if (!password) {
                        password = 'undefined';
                    }
                    return [4 /*yield*/, user_1["default"].findOne({ where: { username: username, password: password } })];
                case 1:
                    User = _a.sent();
                    console_1["default"].log(User);
                    if (!User) {
                        console_1["default"].log(username, password);
                        return [2 /*return*/, res.send({ response: 'Username or password are wrong.' })];
                    }
                    accessToken = jsonwebtoken_1["default"].sign({ Users: Users }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '48h' });
                    res.send(accessToken);
                    return [2 /*return*/];
            }
        });
    });
}
exports.auth = auth;
function getAll(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var User;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1["default"].findAll()];
                case 1:
                    User = _a.sent();
                    res.send(User);
                    return [2 /*return*/];
            }
        });
    });
}
exports.getAll = getAll;
function getById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var User;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1["default"].findAll({
                        where: {
                            id: req.params.id
                        }
                    })];
                case 1:
                    User = _a.sent();
                    if (User) {
                        res.send(User);
                    }
                    else {
                        res.status(404).send({ error: 'NOT FOUND' });
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.getById = getById;
function register(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            (0, users_service_1.create)(req, res);
            return [2 /*return*/];
        });
    });
}
exports.register = register;
