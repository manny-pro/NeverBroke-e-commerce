"use strict";
exports.__esModule = true;
exports.products = void 0;
var sequelize_1 = require("sequelize");
var instance_1 = require("../instance");
exports.products = instance_1["default"].define('products', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    products: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
});
exports["default"] = exports.products;
