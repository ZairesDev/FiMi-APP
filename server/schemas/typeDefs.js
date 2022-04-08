const { gql } = require('apollo-server-express');

//* variable name, for QASup, may change depending on model information

const typeDefs = gql`
  type Auth {
    token: ID!
    qaSupervisor: QaSupervisor
  }

  type Query {
    // this should just go above your QASup query type dif. 
    // will NOT be it's own query. 
    me: QASup
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addSupervisor(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
