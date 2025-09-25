export interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  location: string;
  email: string;
  image: string;
  businessUnit: string;
  costCenter: string;
  legacyEntry: "yes" | "no";
  code?: string;
}

export const ACTIONS = {
  SET_USER: "set-user",
  SET_ADMIN: "set-admin",
  REMOVE_ADMIN: "remove-admin",
  REMOVE_USER: "remove-user",
} as const;

export interface TabType {
  type: "about" | "profile" | "job" | "document" | "assets";
}
