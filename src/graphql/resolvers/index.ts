import { volunteerQueries } from "./queries/volunteer-queries"
import {volunteerMutations} from "./mutations/volunteer-mutations"
export const resolvers = {
    Query: {
        ...volunteerQueries,
    },
    Mutation: {
        ...volunteerMutations,
    }
}
