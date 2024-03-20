import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "@/graphql/resolvers";
import { volunteerTypeDefs } from "@/graphql/schemas/volunteer-schema";

const prisma = new PrismaClient();

// const resolvers = {
//   Query: {
//     getAllUsers: () => prisma.user.findMany(),
//   },
// };

// const typeDefs = gql`
//   type User {
//     id: ID!
//     username: String
//   }
//   type Query {
//     getAllUsers: [User]
//   }
// `;

const server = new ApolloServer({
  resolvers: resolvers,
  typeDefs: volunteerTypeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
