const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/streamingWeb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log("Connect successfully");
  } catch (error) {
    console.log("connect error: " + error);
  }
}

module.exports = { connect };
