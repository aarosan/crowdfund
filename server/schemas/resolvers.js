const { User, Fund, Donation } = require('../models');

const resolvers = {
    Query: {
        getAllFunds: async () => {
            return Fund.find();
        },
        getFundById: async (parent, { fundId }) => {
            return Fund.findOne({ _id: fundId });
        },
        getUser: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
        getDonationsbyFund: async (parent, { fundId }) => {
            return Donation.find({ fund: fundId });
        },
        getDonationsbyUser: async (parent, { userId }) => {
            return Donation.find({ user: userId });
        }
    },

    Mutation: {
        createUser: async (parent, { username, email, password }) => {
            return User.create({ username, email, password });
        },
        login: async (parent, { email, password }) => {
            return User.findOne({ email, password });
        },
        createFund: async (parent, { name, description, goal }) => {
            return Fund.create({ name, description, goal });
        },
        createDonation: async (parent, { amount, fund, user }) => {
            return Donation.create({ amount, fund, user });
        },
        updateFund: async (parent, { fundId, name, description, goal }) => {
            return Fund.findOneAndUpdate({ _id: fundId }, { name, description, goal });
        },
        deleteFund: async (parent, { fundId }) => {
            return Fund.findOneAndDelete({ _id: fundId });
        }
    }
};

module.exports = resolvers;

