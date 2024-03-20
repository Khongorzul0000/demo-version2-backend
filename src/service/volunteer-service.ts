import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";
import { GraphQLError } from "graphql";

export const getVolunteers = async () => {
  try {
    const result = prisma.volunteer.findMany();
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("error fetching");
  }
};

export const getVolunteer = async (id: string) => {
  try {
    const result = await prisma.volunteer.findUnique({ where: { id } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("error fetching");
  }
};
export const createVolunteer = async (input: Prisma.VolunteerCreateInput) => {
  console.log({ input });
  try {
    const result = await prisma.volunteer.create({ data: input });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("error creating");
  }
};
// export const updateVolunteer = async (input: Prisma.VolunteerUpdateInput, id: string) => {
//   try {
//     const result = await prisma.volunteer.update({ data: input, where: { id } });
//     return result;
//   } catch (error) {
//     console.error(error);
//     throw new GraphQLError("error updating");
//   }
// }
export const deleteVolunteer = async (id: string) => {
  try {
    const result = await prisma.volunteer.delete({ where: { id } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("error deleting");
  }
};
