"use strict";
exports.__esModule = true;
exports.categories = void 0;
var sequelize_1 = require("sequelize");
var instance_1 = require("../instance");
var products_1 = require("./products");
exports.categories = instance_1["default"].define('categories', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
});
exports.categories.hasMany(products_1["default"], {});
products_1["default"].belongsTo(exports.categories, {});
exports["default"] = exports.categories;
