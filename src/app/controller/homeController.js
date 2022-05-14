const Singers = require("../model/Singers");
const { multipleMongooseToObject } = require("../../util/mongoose");

class homeController {
  index(req, res, next) {
    Singers.find({}).then((singer) => {
      res.render("home", {
        singer: multipleMongooseToObject(singer),
      });
    });
  }
}

module.exports = new homeController();
