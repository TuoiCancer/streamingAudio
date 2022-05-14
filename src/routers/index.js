const homeRouter = require("./home");
const songsRouter = require("./songs");
const singersRouter = require("./singers");

function route(app) {
  app.use("/singers", singersRouter);
  app.use("/songs", songsRouter);
  app.use("/", homeRouter);
}

module.exports = route;
