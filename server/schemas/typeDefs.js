<<<<<<< HEAD
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
=======
const { gql } = require("apollo-server-express");


const typeDefs = gql`
  type Supervisor {
    _id: ID
    first_name: String
    last_name: String
  }

  type QASup {
    _id: ID
    first_name: String
    last_name: String
    email: String
    qaStaff: [QA]
  }

  type Auth {
    token: ID!
    QASup: QASup
  }

  type QA {
    _id: ID!
    first_name: String
    last_name: String
    language: String
    site: String
    QASup: QASup
    employees: [Employee]
    
    
  }

  type Employee {
    _id: ID
    first_name: String
    last_name: String
    employee_number: Int
    site: String
    role: String
    language: String
    group: String
    supervisor: Supervisor
    qa: QA
  }

  # Queries

  type Query {
    me: QASup
    QASups: [QASup]
    QASup(email: String!): QASup
    employees: [Employee]
    supervisors: [Supervisor]
    QA: [QA]
  }

  # Mutations
  type Mutation {
    createSupervisor(first_name: String!, last_name: String!): Supervisor

    addEmployee(
      first_name: String!
      last_name: String!
      employee_number: Int!
      site: String!
      role: String!
      language: String!
      group: String!
      supervisor: ID!
      qa: ID!
    ): Employee

    login(email: String!, password: String!): Auth

    addQASupUser(first_name: String!, last_name: String!, email: String!, password: String!): Auth

    addQA(first_name: String!, last_name: String!, 
    language: String!, site: String!, QASup: ID!): QA
  }
`;


// export the typeDefs
module.exports = typeDefs;
>>>>>>> develop
