const { User, Fund, Donation } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        getAllFunds: async () => {
            return Fund.find().populate('creator').populate('donations');
        },
        getFundById: async (parent, { fundId }) => {
            return Fund.findOne({ _id: fundId }).populate('creator').populate('donations');
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('funds').populate('donations');
            }
            throw AuthenticationError;
        },
    },

    Mutation: {
        signup: async (parent, {name, description, goal, creator, username, email, password},)=> {  
            const newUser = await User.create({username, email, password});
            const token = signToken(newUser);
            const newFund = await Fund.create({name, description, goal, creator: newUser._id});

            await User.findOneAndUpdate(
                {_id: newUser._id},
                {$addToSet: {funds: newFund._id}}
            );

            return {fund: newFund, token, user: newUser};
        },
        createFund: async (parent, {name, description, goal, creator}, context) => {
            if (context.user){
                const newFund = await Fund.create({name, description, goal, creator: context.user._id});

                await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$addToSet: {funds: newFund._id}}
                );

                return newFund;
            }
            throw AuthenticationError;
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});
            if (!user) {
                throw AuthenticationError;
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw AuthenticationError;
            }
            const token = signToken(user);
            return {token, user};
        },
        createDonation: async (parent, {amount, fund, user, donor}, context) => {
            if (context.user){
                const newDonation = await Donation.create({amount, fund, user: context.user._id, donor: context.user.username});

                await Fund.findOneAndUpdate(
                    {_id: fund},
                    {$addToSet: {donations: newDonation._id}}
                );
                return newDonation;

            } else {
                const donation = await Donation.create({amount, fund, user, donor});
                await Fund.findOneAndUpdate(
                    {_id: fund},
                    {$addToSet: {donations: donation._id}}
                );
                return donation;
            }
        },
        updateFund: async (parent, {fundId, name, description, goal}, context) => {
            if (context.user){
                const updatedFund = await Fund.findOneAndUpdate(
                    {_id: fundId},
                    {name, description, goal},
                    {new: true}
                );
                return updatedFund;
            }
            throw AuthenticationError;
        },
        deleteFund: async (parent, {fundId}, context) => {
            if (context.user){
                const deletedFund = await Fund.findOneAndDelete({_id: fundId});

                const user = await User.findById(context.user._id);
                if (user) {
                    user.funds= user.funds.filter(fund=> fund.toString() !== fundId);
                    await user.save();
                }

                return user;
            }
            throw AuthenticationError;
        },
    },
};

module.exports = resolvers;

