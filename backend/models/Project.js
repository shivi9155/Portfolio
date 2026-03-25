const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    challenge: { type: String, required: true },
    action: { type: String, required: true },
    result: { type: String, required: true },
    liveLink: { type: String },
    githubLink: { type: String },
    tags: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
