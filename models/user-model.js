const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt   = require('bcrypt-nodejs');

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

// generating a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('user', userSchema);

module.exports = User;