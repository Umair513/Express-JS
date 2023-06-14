"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// const express = require("express")

var app = (0, _express["default"])();
var port = 3000;
app.get("/", function (req, res) {
  res.send("Hello Poapl");
});
app.listen(port, function () {
  console.log("App is running at port ".concat(port));
});