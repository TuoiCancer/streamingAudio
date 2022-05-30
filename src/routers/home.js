const express = require("express");
const route = express.Router();

const homeController = require("../app/controller/homeController");

route.get("/", homeController.index);
route.post("/", homeController.store);

module.exports = route;
