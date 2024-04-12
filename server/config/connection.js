const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ecb:v2RLNkkxN6f233Pl@cluster0.ldcrzqj.mongodb.net/');

module.exports = mongoose.connection;