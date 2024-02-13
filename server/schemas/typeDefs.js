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
    owner: String
    description: String
  }

  type PlayerSheet {
    _id: ID!
    name: String!
    owner: String
    description: String
  }

  type Query {
    allUsers: [User]
    me: User
    campaign(_id: ID!): Campaign
    allCampaigns: [Campaign]
    allCampaignsByUser: [Campaign]
    allPlayerSheetsByUser: [PlayerSheet]
    presets: [Presets]
  }

  type Mutation {
    addUser(firstName: String, lastName: String, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    createCampaign(name: String!, description: String): Campaign
    addCampaign(name: String!, owner: String!, description: String, general_notes: String, session_notes: String) : Campaign
    addPresets(type: String!, name: String!, description: String, notes: String) : Presets
    createPlayerSheet(name: String!, description: String): PlayerSheet
  }
`;

module.exports = typeDefs;
