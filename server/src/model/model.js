const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: String,
    link: String
})


module.exports = mongoose.model('infino_assignment_video', videoSchema);