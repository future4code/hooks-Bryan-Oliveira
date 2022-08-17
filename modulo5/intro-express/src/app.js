"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var examples_js_1 = require("./examples.js");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
app.get("/", function (req, res) {
    res.send("Hello from Express");
});
app.get("/users", function (req, res) {
    res.send(examples_js_1.users);
});
app.get("/posts/", function (req, res) {
    var posts = examples_js_1.users.map(function (user) { return user.posts; }).flat(1);
    res.send(posts);
});
app.get("/posts/:user_id", function (req, res) {
    var userId = Number(req.params.user_id);
    var userMatched = examples_js_1.users.filter(function (user) { return user.id === userId; });
    var posts = userMatched.map(function (user) { return user.posts; }).flat(1);
    res.send(posts);
});
app.listen(3003, function () {
    console.log("Server is running in http://localhost:3003");
});
