import { createVolunteer, deleteVolunteer } from "@/service/volunteer-service";
import { Prisma } from "@prisma/client";
export const volunteerMutations = {
  createVolunteer: (_: unknown, { input }: { input: Prisma.VolunteerCreateInput }) => createVolunteer(input),
  deleteVolunteer: (_: unknown, { id }: { id: string }) => deleteVolunteer(id),
//   updateVolunteer: (_: unknown, { id, input }: { id: string; input: Prisma.VolunteerUpdateInput }) => updateVolunteer(id, input),
};
