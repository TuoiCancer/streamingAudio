const express = require("express");
const route = express.Router();

const singersController = require("../app/controller/singersController");

route.post("/create", singersController.create);
route.get("/:slug", singersController.show);
route.get("/", singersController.getAll);
// route.get("/:slug", singersController.show);

module.exports = route;
