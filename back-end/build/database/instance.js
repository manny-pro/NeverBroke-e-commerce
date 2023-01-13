"use strict";
exports.__esModule = true;
var Sequelize = require('sequelize');
require('dotenv').config();
var MYAPI = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: '127.0.0.1',
    dialect: 'mysql'
});
exports["default"] = MYAPI;
