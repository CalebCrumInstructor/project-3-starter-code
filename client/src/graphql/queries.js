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
  query getCampaign {
    campaign {
      _id
      name
      owner
      description
      general_notes
      session_notes
      createdAt
      updatedAt
    }
`;

