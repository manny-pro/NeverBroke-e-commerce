"use strict";
exports.__esModule = true;
var products_route_1 = require("./routes/products.route");
var categories_route_1 = require("./routes/categories.route");
var orders_route_1 = require("./routes/orders.route");
var users_route_1 = require("./routes/users.route");
var cors = require('cors');
var express_1 = require("express");
require("dotenv/config");
var app = (0, express_1["default"])();
app.disable('x-powered-by');
var port = 3018;
app.use(cors({
    origin: "*"
}));
app.use('/products', products_route_1.router);
app.use('/categories', categories_route_1.router);
app.use('/orders', orders_route_1.router);
app.use('/users', users_route_1.router);
app.get('/', function (req, res) {
    console.log(req.query);
    res.send('you are connnected');
});
app.post('/', function (req, res) {
    console.log(req.query);
    res.send('I am a POST request');
});
app.listen(port, function () {
    console.log("SERVER LISTENING ON ".concat(port));
});
