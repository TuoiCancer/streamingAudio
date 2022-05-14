const Song = require("../model/Songs");
const Singer = require("../model/Singers");
const mongoose = require("mongoose");
const { multipleMongooseToObject } = require("../../util/mongoose");

class SingerController {
  show(req, res, next) {
    console.log(req.body.slug);
    Song.find({ belongTo: req.params.slug })
      .then((item) => {
        res.render("song", {
          song: multipleMongooseToObject(item),
        });
      })
      .catch(next);
  }
  create(req, res, next) {
    const item = new Singer(req.body);
    item
      .save()
      .then((res) => res.json("luu thanh cong"))
      .catch((err) => res.json(err));
  }
  getAll(req, res, next) {
    Singer.find({}).then((item) => {
      res.json(item);
    });
  }
}

module.exports = new SingerController();
