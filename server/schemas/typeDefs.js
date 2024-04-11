const typeDefs = `
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
    }

    type Fund {
        _id: ID
        name: String!
        description: String!
        goal: Float
    }

    type Donation {
        _id: ID
        amount: Float!
        createdAt: String
        fund: [Fund]
        user: [User]
    }

    type Query {
        getAllFunds: [Fund]!
        getFundById(fundId: ID!): Fund
        getUser(userId: ID!): User
        getDonationsbyFund(fundId: ID!): [Donation]
        getDonationsbyUser(userId: ID!): [Donation]
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): User
        login(email: String!, password: String!): User
        createFund(name: String!, description: String!, goal: Float): Fund
        createDonation(amount: Float!, fund: ID!, user: ID!): Donation
        updateFund(fundId: ID!, name: String, description: String, goal: Float): Fund
        deleteFund(fundId: ID!): Fund
    }
`;

module.exports = typeDefs;