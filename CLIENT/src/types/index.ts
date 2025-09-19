export interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  location: string;
  email: string;
  image: string;
  businessUnit: string;   // new
  costCenter: string;     // new
  legacyEntry: "yes" | "no"; // new
  code?: string;          // optional if you want code search
}

