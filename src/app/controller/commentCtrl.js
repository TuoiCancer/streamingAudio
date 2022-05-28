const Comment = require("../model/Comment");
const { multipleMongooseToObject } = require("../../util/mongoose");

class commentCtrl {
  //GET /getAll
  getAllComment(req, res, next) {
    Comment.find({}).then((item) => {
      res.json(item);
    });
  }

  //POST /store
  createComment(req, res, next) {
    console.log(req);
    const item = new Comment(req.body);
    item
      .save()
      .then(() => {
        res.json("thanh cong");
      })
      .catch((err) => res.json(err));
  }
}

module.exports = new commentCtrl();
