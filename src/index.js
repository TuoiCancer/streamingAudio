const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const route = require("./routers");
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
// Database
const URL = process.env.MONGODB_URL;
mongoose.connect(
  URL,
  { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false },
  (err) => {
    if (err) throw err;
    console.log("Connect successfully!");
  }
);

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

//Routes
route(app);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port http://localhost:${process.env.PORT}`);
});
