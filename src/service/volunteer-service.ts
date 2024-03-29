import { prisma } from "@/utils/prisma";
import { Prisma, VolunteerCategory } from "@prisma/client";
import { GraphQLError } from "graphql";

export const getVolunteers = async () => {
  try {
    // const result = prisma.volunteer.findMany({ include: { leader: true } });
    // return result;
    const results = await prisma.volunteer.findMany({ include: { leader: true } });

    // Iterate over the results and check if leader is null
    const modifiedResults = results.map((volunteer) => {
      if (volunteer.leader === null) {
        // Customize response if leader is null
        return {
          ...volunteer,
          leader: "No leader specified",
        };
      } else {
        return volunteer;
      }
    });

    return modifiedResults;
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

export const getVolunteersByCategory = async (category: VolunteerCategory) => {
  try {
    const volunteers = await prisma.volunteer.findMany({ where: { category } });
    return volunteers;
  } catch (error) {
    console.error("category:", error);
    throw new Error("category");
  }
};

export const createVolunteer = async (input: Prisma.VolunteerUncheckedCreateInput & { leaderId: string }) => {
  const data: Prisma.VolunteerCreateInput = {
    name: input.name,
    where: input.where,
    when: input.when,
    description: input.description,
    neededPeople: input.neededPeople,
    category: input.category,
    leader: {
      connect: {
        id: input.leaderId,
      },
    },
  };
  try {
    const result = await prisma.volunteer.create({
      data,
    });
    console.log(result);
    return result;
    // if(result.)
  } catch (error) {
    console.error(error);
    throw new GraphQLError("error creating");
  }
};

export const updateVolunteer = async (input: Prisma.VolunteerUpdateInput, id: string) => {
  try {
    const result = await prisma.volunteer.update({ data: input, where: { id } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("error updating");
  }
};

export const deleteVolunteer = async (id: string) => {
  try {
    const result = await prisma.volunteer.delete({ where: { id } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("error deleting");
  }
};
