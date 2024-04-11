const { Schema, model, mongo, default: mongoose } = require('mongoose');

const donationSchema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    fund: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fund',
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Donation = model('Donation', donationSchema);

module.exports = Donation;