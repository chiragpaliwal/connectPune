const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const feedbackSchema = new Schema({
    email: String,
    body: String
});

const Feedback = mongoose.model('feedback', feedbackSchema);

module.exports = Feedback;