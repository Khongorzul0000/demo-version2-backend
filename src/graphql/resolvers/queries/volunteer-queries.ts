import { getVolunteer, getVolunteers } from "@/service/volunteer-service";
export const volunteerQueries = {
  getVolunteers: () => getVolunteers(),
  getVolunteer: (_: unknown, { id }: { id: string }) => getVolunteer(id),
};
