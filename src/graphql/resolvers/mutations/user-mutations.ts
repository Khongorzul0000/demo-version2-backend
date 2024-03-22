import { createUser } from "@/service/user-service";
import { Prisma } from "@prisma/client";
export const userMutations = {
    createUser: (_:unknown, {input}:{input: Prisma.UserCreateInput}) => createUser(input)
}