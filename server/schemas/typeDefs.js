const { gql } = require("apollo-server-express");


const typeDefs = gql`
  type Query {
    employees: [Employee]
  }
`;












// export the typeDefs
module.exports = typeDefs;