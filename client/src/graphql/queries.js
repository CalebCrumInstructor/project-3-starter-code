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
query AllCampaignsByUser {
  allCampaignsByUser {
    _id
    name
  }
}
`;

