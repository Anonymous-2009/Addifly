// types/user.types.ts

export interface User {
  id: number;
  name: string;
  age: number;
  gender: string;
  createdAt: string;
  salary: number;
}

export interface UsersResponse {
  message: string;
  users: User[];
}
