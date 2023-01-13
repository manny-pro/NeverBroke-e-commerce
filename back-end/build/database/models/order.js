"use strict";
exports.__esModule = true;
exports.order = void 0;
var sequelize_1 = require("sequelize");
var instance_1 = require("../instance");
exports.order = instance_1["default"].define('order', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNul: false
    },
    total: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNul: false
    },
    products: {
        type: sequelize_1.DataTypes.STRING,
        allowNul: false
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNul: false
    }
});
exports["default"] = exports.order;
