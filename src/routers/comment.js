const express = require("express");
const route = express.Router();

const commentCtrl = require("../app/controller/commentCtrl");

route.post("/store", commentCtrl.createComment);
route.get("/", commentCtrl.getAllComment);
module.exports = route;
