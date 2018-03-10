const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String,
    thumbnail: String,
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      username: {
        type: String,
        unique: true,
        trim: true
      },
      password: {
        type: String,
        required: true,
      }
});

const User = mongoose.model('user', userSchema);

module.exports = User;