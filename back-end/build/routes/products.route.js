"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var products_controller_1 = require("../controllers/products.controller");
exports.router = (0, express_1.Router)();
exports.router.post("/", products_controller_1.create);
exports.router.get("/", products_controller_1.getAll);
exports.router.get("/:id", products_controller_1.getById);
exports.router.put("/:id", products_controller_1.updateById);
exports.router["delete"]("/:id", products_controller_1.deleteById);
exports["default"] = exports.router;
