import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "@/graphql/resolvers";
import { typeDefs } from "@/graphql/schemas"

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
  typeDefs
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
