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

export interface DeleteUserResponse {
  message: string;
  user: {
    count: number;
  };
}

// utils/types/crud.types.ts

export interface FindUserResponse {
  message: string;
  user: User[]; // Assuming User is defined elsewhere with the required fields
}

export interface User {
  id: number;
  name: string;
  age: number;
  gender: string;
  createdAt: string;
  salary: number;
}
