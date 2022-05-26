const Comment = require("../model/Comment");
const { multipleMongooseToObject } = require("../../util/mongoose");

class commentCtrl {
  //GET /getAll
  getAllComment(req, res, next) {
    Comment.find({}).then((item) => {
      res.render("comment", {
        comments: multipleMongooseToObject(item),
      });
    });
  }

  //POST /store
  createComment(req, res, next) {
    const item = new Comment(req.body);
    item
      .save()
      .then(() => {
        res.redirect("/comment");
      })
      .catch((err) => res.json(err));
  }
}

module.exports = new commentCtrl();
