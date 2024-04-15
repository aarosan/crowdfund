const { Schema, model } = require('mongoose');

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
        type: Schema.Types.ObjectId,
        ref: 'Fund',
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    donor: {
        type: String,
        required: true,
    }
        
});

const Donation = model('Donation', donationSchema);

module.exports = Donation;