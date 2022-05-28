const Song = require("../model/Songs");
const mongoose = require("mongoose");
const { multipleMongooseToObject } = require("../../util/mongoose");

class SongsController {
  show(req, res, next) {
    console.log(req.params.slug);
    Song.find({ belongTo: req.params.slug })
      .then((songs) => {
        res.json(songs);
      })
      .catch(next);
  }
  create(req, res, next) {
    const item = new Song(req.body);
    item
      .save()
      .then((res) => res.status(200).json("luu thanh cong"))
      .catch((err) => res.status(500).json(err));
  }
  getAll(req, res, next) {
    Song.find({}).then((item) => {
      res.status(200).json(item);
    });
  }
}

module.exports = new SongsController();
