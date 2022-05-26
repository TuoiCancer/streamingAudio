const homeRouter = require("./home");
const songsRouter = require("./songs");
const singersRouter = require("./singers");
const detailRouter = require("./details");
const commentRouter = require("./comment");

function route(app) {
  app.use("/comment", commentRouter);
  app.use("/details", detailRouter);
  app.use("/singers", singersRouter);
  app.use("/songs", songsRouter);
  app.use("/", homeRouter);
}

module.exports = route;
