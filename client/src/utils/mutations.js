import { gql } from '@apollo/client';

export const SIGNUP_USER_FUND = gql`
mutation Signup($name: String!, $description: String!, $username: String!, $email: String!, $password: String!, $goal: Float) {
  signup(name: $name, description: $description, username: $username, email: $email, password: $password, goal: $goal) {
    fund {
      name
      goal
      description
      creator {
        _id
        username
      }
    }
    token
  }
}
`;

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      username
      _id
    }
  }
}
`;

export const CREATE_FUND = gql`
mutation CreateFund($name: String!, $description: String!, $goal: Float, $creator: ID) {
  createFund(name: $name, description: $description, goal: $goal, creator: $creator) {
    _id
    creator {
      username
      _id
    }
    description
    goal
    name
  }
}
`;

export const CREATE_DONATION = gql`
mutation CreateDonation($amount: Float!, $fund: ID!, $donor: String!) {
  createDonation(amount: $amount, fund: $fund, donor: $donor) {
    _id
    amount
    createdAt
    donor
    fund {
      name
      _id
      description
    }
    user {
      username
    }
  }
}
`;

//might consider doing separate mutations for user donations and non user donations

export const UPDATE_FUND = gql`
mutation UpdateFund($fundId: ID!, $name: String, $description: String, $goal: Float) {
  updateFund(fundId: $fundId, name: $name, description: $description, goal: $goal) {
    creator {
      username
    }
    name
    goal
    description
    donations {
      user {
        username
      }
      donor
      createdAt
      amount
    }
  }
}
`;

export const DELETE_FUND = gql`
mutation DeleteFund($fundId: ID!) {
  deleteFund(fundId: $fundId) {
    username
    funds {
      name
      description
      goal
      donations {
        user {
          username
        }
        donor
        createdAt
        amount
      }
    }
  }
}
`;