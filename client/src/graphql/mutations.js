import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation LoginUserMutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
        createdAt
        updatedAt
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUserMutation($email: String!, $password: String!, $firstName: String, $lastName: String) {
    addUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
      token
      user {
        _id
        firstName
        lastName
        email
        createdAt
        updatedAt
      }
    }
  }
`;

export const ADD_CAMPAIGN = gql`
  mutation addCampaignMutation($name: String!, $owner: String!, $description: String, $general_notes: String, $session_notes: String) {
    addCampaign(name: $name, owner: $owner, description: $description, general_notes: $general_notes, session_notes: $session_notes) {
      token
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
    }
  }
`;

export const ADD_PRESETS = gql`
  mutation addPresetsMutation($name: String!, $description: String, $general_notes: String, $session_notes: String) {
    addPresets(name: $name, description: $description, general_notes: $general_notes, session_notes: $session_notes) {
      token
      campaign {
        _id
        type
        name
        description
        notes
        createdAt
        updatedAt
      }
    }
  }
`;