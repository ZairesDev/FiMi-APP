const { gql } = require("apollo-server-express");


const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`;












// export the typeDefs
module.exports = typeDefs;