const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const complaintSchema = new Schema({
    complaintCategory: String,
    desc: String,
    location: String
});

const Complaint = mongoose.model('complaint', complaintSchema);

module.exports = Complaint;