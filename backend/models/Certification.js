const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    provider: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String },
    link: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Certification', certificationSchema);
