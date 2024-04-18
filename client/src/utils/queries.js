import { gql } from '@apollo/client';

export const GET_ME = gql`
query Me {
  me {
    donations {
      fund {
        name
      }
      createdAt
      amount
    }
    email
    username
    funds {
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
}
`;

export const GET_ALL_FUNDS = gql`
query GetAllFunds {
  getAllFunds {
    creator {
      _id
      username
    }
    description
    donations {
      user {
        username
      }
      donor
      createdAt
      amount
    }
    goal
    name
  }
}
`;

export const GET_FUND_BY_ID = gql`
query GetFundById($fundId: ID!) {
  getFundById(fundId: $fundId) {
    creator {
      username
    }
    description
    donations {
      amount
      createdAt
      donor
      user {
        username
      }
    }
    goal
    name
  }
}
`;
