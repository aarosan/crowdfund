const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://black:27017/takesAVillage');

module.exports = mongoose.connection;