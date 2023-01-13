"use strict";
exports.__esModule = true;
exports.users = void 0;
var sequelize_1 = require("sequelize");
var instance_1 = require("../instance");
var order_1 = require("./order");
exports.users = instance_1["default"].define('users', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNul: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
exports.users.hasMany(order_1["default"], {});
order_1["default"].belongsTo(exports.users, {});
exports["default"] = exports.users;
