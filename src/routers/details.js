const express = require("express");
const route = express.Router();

const detailsCtrl = require("../app/controller/detailsCtrl");

route.get("/getAll", detailsCtrl.getAllDetails);

module.exports = route;
