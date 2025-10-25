export const Colleges = [
  "Bangalore Institute of Technology",
  "Other"
] as const;
export interface StudentData {
  name: string;
  email: string;
  photoURL: string | null;
  college: string;
  collegeEmail: string | null;
};
export type College = typeof Colleges[number];
