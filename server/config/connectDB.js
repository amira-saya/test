const mongoose = require("mongoose");
// const path = require("path")
// // const config = require("config");
// const fs = require('fs')
// let data_static = fs.readFileSync(path.resolve(__dirname),'./default.json')
// let config = JSON.parse(data_static)

const mongoUri = process.env.MONGODB_URI || "mongodb+srv://amira:azerty@cluster0.jljxp.mongodb.net/users_db?retryWrites=true&w=majority"

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