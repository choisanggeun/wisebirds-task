export type Auth = "admin" | "manager" | "viewer";

export interface AuthMe {
  id: number;
  email: string;
  name: string;
  company: {
    id: number;
    name: string;
  };
}
