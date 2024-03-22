import gql from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    username: String!
    password: String!
    email: String!
    id: ID!
  }

  input UserCreateInput {
    username: String!
    password: String
    email: String!
  }

  type Query {
    getUser(id: ID): User
    getUsers: [User]
  }

  type Mutation {
    createUser(input: UserCreateInput!): User
  }
`;
