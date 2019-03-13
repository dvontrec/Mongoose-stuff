// Creates user model
const mongoose = require('mongoose');

// Allows us to make schema for user model
const Schema = mongoose.Schema;

// Sets up the properties that users have
const UserSchema = new Schema({
  name: String
});

// Creates the user model
const User = mongoose.model('user', UserSchema); // named user and follows the UserSchema

// exports the user model
module.exports = User;
