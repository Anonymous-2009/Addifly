export interface AddUserResponse {
  message: string;
  user: {
    id: number;
    name: string;
    age: number;
    gender: string;
    createdAt: string; // ISO date string
    salary: number;
  };
}
