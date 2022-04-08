const { gql } = require('apollo-server-express');

//* variable name of 'supervisor' may change depending on model information

const typeDefs = gql`
  type Auth {
    token: ID!
    supervisor: Supervisor
  }

  type Query {
    me: Supervisor
    qaSupervisor: [QaSupervisor]
    qaSupervisor(username: String!): QaSupervisor
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addSupervisor(username: String!, email: String!, password: String!): Auth
    addComment(commentText: String!): Comment
  }
`;

module.exports = typeDefs;
