const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        funds: [Fund]!
        donations: [Donation]!
    }

    type Fund {
        _id: ID
        name: String
        description: String
        goal: Float
        creator: User!
        donations: [Donation]!
    }

    type Donation {
        _id: ID
        amount: Float
        createdAt: String
        fund: Fund!
        user: User
        donor: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type FundAndAuth {
        fund: Fund
        token: ID!
    }

    type Query {
        getAllFunds: [Fund]
        getFundById(fundId: ID!): Fund
        me: User
    }

    type Mutation {
        signup(name: String!, description: String!, goal: Float, creator: ID, username: String!, email: String!, password: String!): FundAndAuth
        createFund(name: String!, description: String!, goal: Float, creator: ID): Fund
        login(email: String!, password: String!): Auth
        createDonation(amount: Float!, fund: ID!, user: ID, donor: String!): Donation
        updateFund(fundId: ID!, name: String, description: String, goal: Float): Fund
        deleteFund(fundId: ID!): User
      }
`;

module.exports = typeDefs;