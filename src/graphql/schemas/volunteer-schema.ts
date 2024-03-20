import gql from "graphql-tag";

export const volunteerTypeDefs = gql`
  type Volunteer {
    id: ID!
    name: String!
    where: String!
    when: String!
    description: String!
    neededPeople: String!
    isDone: Boolean!
  }
  input VolunteerCreateInput {
    name: String!
    where: String!
    when: String!
    description: String!
    neededPeople: String!
    isDone: Boolean!
  }
  # type VolunteerUpdateInput {
  #   name: String!
  #   where: String!
  #   when: String!
  #   description: String!
  #   neededPoeple: String!
  #   isDone: Boolean!
  #   id: ID!
  # }
  type Query {
    getVolunteer(id: ID): Volunteer
    getVolunteers: [Volunteer]
  }
  type Mutation {
    createVolunteer(input: VolunteerCreateInput!): Volunteer
    deleteVolunteer(id: ID): Volunteer
    # updateVolunteer(input: VolunteerUpdateInput!, id: ID): Volunteer
  }
`;
