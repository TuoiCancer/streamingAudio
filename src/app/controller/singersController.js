const Song = require("../model/Songs");
const Singer = require("../model/Singers");
const mongoose = require("mongoose");
const { multipleMongooseToObject } = require("../../util/mongoose");

class SingerController {
  show(req, res, next) {
    console.log(req.body.slug);
    Song.find({ belongTo: req.params.slug })
      .then((item) => {
        res.status(200).json(item);
      })
      .catch(next);
  }
  create(req, res, next) {
    const newSinger = new Singer(req.body);
    newSinger
      .save()
      .then((res) => res.status(200).json(newSinger))
      .catch((err) => res.json(err));
  }
  getAll(req, res, next) {
    Singer.find({}).then((item) => {
      res.status(200).json(item);
    });
  }
}

module.exports = new SingerController();
