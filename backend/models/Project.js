const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String], // Array of strings like ['React', 'Node.js']
    required: true,
  },
  liveLink: {
    type: String,
    required: false, // Optional field
  },
  repoLink: {
    type: String,
    required: false, // Optional field
  },
  image: {
    type: String, // URL or path to project image
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Project', ProjectSchema);
