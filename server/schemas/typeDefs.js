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

  type Presets {
    _id: ID!
    type: String!
    name: String!
    description: String
    notes: String
    createdAt: String
    updatedAt: String
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
    presets: [Presets]
  }

  type Mutation {
    addUser(firstName: String, lastName: String, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addCampaign(name: String!, owner: String!, description: String, general_notes: String, session_notes: String) : Campaign
    addPresets(type: String!, name: String!, description: String, notes: String) : Presets
  }
`;

module.exports = typeDefs;
