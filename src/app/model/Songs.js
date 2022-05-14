const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
// const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;

const Songs = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, maxlength: 600 },
    image: { type: String },
    songURL: { type: String, maxlength: 255 },
    belongTo: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

// Add Plugin
mongoose.plugin(slug);

// Songs.plugin(mongooseDelete, {
//   deletedAt: true,
//   overrideMethods: "all",
// });

module.exports = mongoose.model("Songs", Songs);
