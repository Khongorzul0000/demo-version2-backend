import gql from "graphql-tag";

export const volunteerTypeDefs = gql`
  type Volunteer {
    id: ID!
    name: String!
    where: String!
    when: String!
    description: String!
    neededPeople: String!
    category: String!
    isDone: Boolean!
    leader: User
    attendees: [User]
  }

  input VolunteerCreateInput {
    name: String!
    where: String!
    when: String!
    category: String!
    description: String!
    neededPeople: String!
    isDone: Boolean!
    leaderId: String!
  }

  input VolunteerUpdateInput {
    name: String!
    where: String!
    when: String!
    description: String!
    neededPeople: String!
    isDone: Boolean!
  }

  type Query {
    getVolunteer(id: ID): Volunteer
    getVolunteers: [Volunteer]
  }

  type Mutation {
    createVolunteer(input: VolunteerCreateInput!): Volunteer
    deleteVolunteer(id: ID): Volunteer
    updateVolunteer(input: VolunteerUpdateInput!, id: ID): Volunteer
  }
`;
