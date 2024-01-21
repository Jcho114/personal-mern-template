const mongoose = require("mongoose");

// creating schema
const userSchema = new mongoose.Schema({
    username: String,
    // we will use OAuth dw this is just an example
    password: String
});

// compiling model
const User = mongoose.model("User", userSchema, "users");

module.exports = User;