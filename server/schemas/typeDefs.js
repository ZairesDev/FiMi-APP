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
    _id: ID
    first_name: String
    last_name: String
    language: String
    site: String
    
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
  }

  # Queries

  type Query {
    me: QASup
    QASups: [QASup]
    QASup: QASup
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
    ): Employee

    login(email: String!, password: String!): Auth

    addQASupUser(first_name: String!, last_name: String!, email: String!, password: String!): Auth

    addQA(first_name: String!, last_name: String!, 
    language: String!, site: String!): QA
  }
`;




// export the typeDefs
module.exports = typeDefs;