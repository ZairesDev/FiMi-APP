const { gql } = require("apollo-server-express");


const typeDefs = gql`
  type Supervisor {
    _id: ID
    first_name: String
    last_name: String
    
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
    employees: [Employee]
    supervisors: [Supervisor]
  }

  # Mutations
  type Mutation {
    createSupervisor(first_name: String!, last_name: String!): Supervisor
    
     addEmployee(first_name: String!, last_name: String!, employee_number: Int!, site: String!, role: String!, language: String!, group: String!, supervisor: ID!): Employee
   
  }
`;












// export the typeDefs
module.exports = typeDefs;