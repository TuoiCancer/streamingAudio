const Singers = require("../model/Singers");
const { multipleMongooseToObject } = require("../../util/mongoose");

class homeController {
  index(req, res, next) {
    Singers.find({}).then((singer) => {
      res.json(singer);
    });
  }
  store(req, res, next) {
    const item = new Singers(req.body);
    item
      .save()
      .then(() => {
        res.json("thanh cong");
      })
      .catch((err) => res.json(err));
  }
}

module.exports = new homeController();
