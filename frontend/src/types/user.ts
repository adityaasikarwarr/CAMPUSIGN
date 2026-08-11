export type UserRole =
  | "STUDENT"
  | "STAFF"
  | "ADMIN";


export interface User {

  id:string;

  name:string;

  email:string;

  role:UserRole;

}



export interface LoginPayload {

  email:string;

  password:string;

  role:UserRole;

}



export interface SignupPayload {

  name:string;

  email:string;

  password:string;

  role:UserRole;


  collegeId?:string;

  department?:string;

  year?:string;


  employeeId?:string;

  designation?:string;


  adminCode?:string;

}