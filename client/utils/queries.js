import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      first_name
      last_name
      email
      qaStaff {
        _id
        first_name
        last_name
        language
        site
      }
    }
  }
`;

export const QUERY_QAROSTER = gql`
  {
    QA {
      _id
      first_name
      last_name
      language
      site
      QASup {
        first_name
        last_name
      }
    }
  }
`;

export const EMPLOYEES = gql`
  {
    employees {
      _id
      first_name
      last_name
      employee_number
      site
      role
      language
      group
      supervisor {
        first_name
        last_name
      }
      qa {
        first_name
        last_name
      }
    }
  }
`;
