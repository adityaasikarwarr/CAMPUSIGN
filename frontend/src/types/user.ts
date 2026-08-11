export type UserRole =
  | "STUDENT"
  | "STAFF"
  | "ADMIN";


export interface User {
  id: string;

  name: string;

  email: string;

  role: UserRole;

  avatar?: string;
}


export interface LoginPayload {
  email: string;

  password: string;

  role: UserRole;
}


export interface SignupPayload {

  name: string;

  email: string;

  password: string;

  role: UserRole;

}