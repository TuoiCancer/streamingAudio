const Song = require("../model/Songs");
const mongoose = require("mongoose");
const { multipleMongooseToObject } = require("../../util/mongoose");

class SongsController {
  show(req, res, next) {
    // Song.find({ belongTo: req.params.slug })
    //   .then((songs) => {
    //     res.render("song", {
    //       songs: multipleMongooseToObject(songs),
    //     });
    //   })
    //   .catch(next);
  }
  create(req, res, next) {
    const item = new Song(req.body);
    item
      .save()
      .then((res) => res.json("luu thanh cong"))
      .catch((err) => res.json(err));
  }
  getAll(req, res, next) {
    Song.find({}).then((item) => {
      res.json(item);
    });
  }
}

module.exports = new SongsController();
