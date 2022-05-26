const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema(
  {
    content: { type: String, required: true },
    user: { type: String, maxlength: 600 },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

// Songs.plugin(mongooseDelete, {
//   deletedAt: true,
//   overrideMethods: "all",
// });

module.exports = mongoose.model("Comment", Comment);
