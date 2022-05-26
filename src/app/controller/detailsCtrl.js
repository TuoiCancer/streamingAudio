const Singers = require("../model/Singers");
const { multipleMongooseToObject } = require("../../util/mongoose");

class detailsCtrl {
  //GET getAll
  getAllDetails(req, res, next) {
    res.render("details");
  }
}

module.exports = new detailsCtrl();
