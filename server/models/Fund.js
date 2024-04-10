const { Schema, model } = require('mongoose');

const fundSchema = new Schema({
    fundName: {
        type: String,
        required: true,
        unique: true,
    },
    fundDescription: {
        type: String,
        required: true,
        maxlength: 280,
    },
    fundGoal: {
        type: Number,
    },
    fundCurrent: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    fundCreator: {
        type: String,
        required: true,
    },
});

const Fund = model('Fund', fundSchema);

module.exports = Fund;