const { Schema, model } = require('mongoose');

const fundSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 280,
    },
    goal: {
        type: Number,
    }
});

const Fund = model('Fund', fundSchema);

module.exports = Fund;