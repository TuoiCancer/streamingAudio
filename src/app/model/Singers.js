const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

const Schema = mongoose.Schema;

const Singer = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, maxlength: 600 },
    image: { type: String },
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

module.exports = mongoose.model("Singer", Singer);
