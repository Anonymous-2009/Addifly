type Gender = 'male' | 'female';

export interface UserType {
  name: string;
  age: number;
  gender: Gender;
  salary: number;
}

export interface Admin {
  email: string;
  password: string;
  username: string;
}
