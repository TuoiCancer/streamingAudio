const Singers = require("../model/Singers");
const { multipleMongooseToObject } = require("../../util/mongoose");

class homeController {
  index(req, res, next) {
    Singers.find({}).then((singer) => {
      res.json(singer);
    });
  }
}

module.exports = new homeController();
