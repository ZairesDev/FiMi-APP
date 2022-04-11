import { gql } from '@apollo/client';

export const LOGIN_QA = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_QA = gql`
  mutation addQA($username: String!, $email: String!, $password: String!) {
    addQA(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
