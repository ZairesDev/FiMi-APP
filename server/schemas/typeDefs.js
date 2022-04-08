const { gql } = require('apollo-server-express');

//* variable name of 'supervisor' may change depending on model information

const typeDefs = gql`
  type Auth {
    token: ID!
    qaSupervisor: QaSupervisor
  }

  type Query {
    me: QASup
    qaSupervisor: [QaSupervisor]
    qaSupervisor(username: String!): QaSupervisor
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addSupervisor(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
