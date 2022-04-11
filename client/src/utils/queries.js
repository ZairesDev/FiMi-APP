import { gql } from '@apollo-client';

export const QUERY_QA = gql`
  {
    me {
      _id
      username
      email
      qaStaff {
        _id
        firstName
        lastName
        language
        site
        email
        QASup {
          _id
          firstName
          lastName
        }
      }
    }
  }
`;

export const QUERY_QA_MINIMAL = gql`
  {
    me {
      _id
      username
      email
      qaStaff {
        _id
        firstName
        lastName
      }
    }
  }
`;

//* Now we need to conditionally render data to page based on user loggedIn status.
//* let Michelle check front-end mutations and queries before completing this.
