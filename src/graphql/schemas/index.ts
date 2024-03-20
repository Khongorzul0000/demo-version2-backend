import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { volunteerTypeDefs } from "./volunteer-schema";

export const typeDefs = mergeTypeDefs([volunteerTypeDefs])
