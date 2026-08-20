export type BookingServiceId =
  | "squint"
  | "binocular"
  | "children"
  | "amblyopia"
  | "convergence"
  | "motility";

export const BOOKING_SERVICES: {
  id: BookingServiceId;
  name: string;
  desc: string;
}[] = [
  {
    id: "squint",
    name: "Squint and strabismus",
    desc: "Assessment and management",
  },
  {
    id: "binocular",
    name: "Binocular vision",
    desc: "Convergence and eye teaming",
  },
  {
    id: "children",
    name: "Children's assessments",
    desc: "Amblyopia and early screening",
  },
  {
    id: "amblyopia",
    name: "Amblyopia management",
    desc: "Early detection and treatment plans",
  },
  {
    id: "convergence",
    name: "Convergence problems",
    desc: "Binocular vision assessments",
  },
  {
    id: "motility",
    name: "Eye movement disorders",
    desc: "Ocular motility assessments",
  },
];

export const BOOKING_TIMES = [
  "9:00 am",
  "9:45 am",
  "11:00 am",
  "2:15 pm",
  "3:00 pm",
  "4:30 pm",
];
