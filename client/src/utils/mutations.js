import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      QASup {
        _id
        first_name
        last_name
      }
    }
  }
`;

export const ADD_QASUP_USER = gql`
  mutation addQASupUser($email: String!, $password: String!) {
    addQASupUser(first_name: $firstName, last_name: $lastName, email: $email, password: $password) {
      token
      QASup {
        _id
      }
    }
  }
`;

export const ADD_EMPLOYEE = gql`
    mutation addEmployee($firstName: String!, $lastName: String!, $employeeNumber: Int!, $site: String!, $role: String!, $language: String!, $group: String!, $supervisor: ID!, $qa: ID!) {
    addEmployee((first_name: $firstName, last_name: $lastName, employee_number: $employeeNumber, site: $site, role: $role, language: $language, group: $group, supervisor: $supervisor, qa: $qa){
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

export const ADD_QA = gql`
  mutation addQA(
    $firstName: String!
    $lastName: String!
    $language: String!
    $site: String!
    $qaSup: ID!
  ) {
    addQA(
      first_name: $firstName
      last_name: $lastName
      language: $language
      site: $site
      QASup: $qaSup
    ) {
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
