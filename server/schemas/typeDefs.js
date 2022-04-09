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
    QASup: [QASup]
    
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
    supervisor: [Supervisor]
    QA: [QA]
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
      QA: ID!
    ): Employee

    login(email: String!, password: String!): Auth

    addQASupUser(first_name: String!, last_name: String!, email: String!, password: String!): Auth

    addQA(first_name: String!, last_name: String!, 
    language: String!, site: String!, QASup: ID!): QA
  }
`;




// export the typeDefs
module.exports = typeDefs;