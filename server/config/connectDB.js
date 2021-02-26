const mongoose = require("mongoose");
// const config = require("config");
const fs = require('fs')
let data_static = fs.readFileSync('default.json')
let config = JSON.parse(data_static)

const mongoUri = process.env.MONGODB_URI || config[mongoUri]

module.exports = connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`db is connected ...`);
  } catch (error) {
    console.log(error);
  }
};