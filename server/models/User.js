const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  accountType: String,
  email: String,
  password: String,
});



User = mongoose.model("User", userSchema);

module.exports = {
  User
};