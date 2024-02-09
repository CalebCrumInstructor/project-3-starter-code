const typeDefs = `

  scalar Date

  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String!
    password: String!
    createdAt: String
    updatedAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Campaign {
    _id: ID!
    name: String!
    owner: String!
    description: String
    general_notes: String
    session_notes: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    me: User
    campaign: Campaign
  }

  type Mutation {
    addUser(firstName: String, lastName: String, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addCampaign(name: String!, owner: String!, description: String, general_notes: String, session_notes: String) : Campaign
  }
`;

module.exports = typeDefs;
