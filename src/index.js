const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");

const route = require("./routers");
const app = express();
const port = 3000;
const db = require("./config/db");
//connect to database
db.connect();

app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-type");
  next();
});
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
//Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Routes
route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
