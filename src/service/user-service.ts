import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";
import { GraphQLError } from "graphql";
import bcrypt from "bcrypt"

const saltRounds = 10;

export const getUsers = async () => {
  try {
    const result = prisma.user.findMany();
    return result;
  } catch (error) {
    console.log(error);
    throw new GraphQLError("error fetching");
  }
};

export const getUser = async (id: string) => {
  try {
    const result = await prisma.user.findUnique({ where: { id } });
    return result;
  } catch (error) {
    console.log(error);
    throw new GraphQLError("error fetching");
  }
};

export const createUser = async (input: Prisma.UserCreateInput) => {
  try {
    // const rep: undefined | null = input.password
    const hashed = bcrypt.hash(rep, saltRounds);
    const result = await prisma.user.create({
      data: {
        ...input,
        password: hashed,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new GraphQLError("error fetching");
  }
}