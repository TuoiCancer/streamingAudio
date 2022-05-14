const express = require("express");
const route = express.Router();

const songsController = require("../app/controller/songsController");

route.post("/create", songsController.create);
route.get("/:slug", songsController.show);
route.get("/", songsController.getAll);

module.exports = route;
