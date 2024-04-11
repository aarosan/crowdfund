import { gql } from '@apollo/client';

const GET_ME = gql`
  query GetMe {
    me {
      _id
      username
      email
      
      }
    }
  }
`;

export { GET_ME };