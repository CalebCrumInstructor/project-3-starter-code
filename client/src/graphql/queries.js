import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query getMeQuery {
    me {
      _id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`;

// query getPresets {
//   presets {
//     _id
//     type
//     name
//     description
//     notes
//     createdAt
//     updatedAt
//   }



// query getCampaignClass {
//   campaign_class {
//     _id
//     campaign_id
//     name
//     description
//     notes
//   }
// }

export const QUERY_MY_CAMPAIGNS = gql`
query Query {
  allCampaignsByUser {
    _id
    name
  }
}
`;

export const QUERY_CAMPAIGN = gql`
query Campaign($id: ID!) {
  campaign(_id: $id) {
    _id
    name
    description
  }
}
`

export const QUERY_MY_PLAYER_SHEETS = gql`
query Query {
  allPlayerSheetsByUser {
    _id
    name
  }
}
`;
