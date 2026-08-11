import {
  LoginPayload,
  SignupPayload,
  User,
} from "@/types/user";



const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "";



// LOGIN

export async function loginUser(
  data: LoginPayload
): Promise<User> {


  /*
    Future:

    const response = await fetch(
      `${API_URL}/auth/login`,
      {
        method:"POST",
        body:JSON.stringify(data)
      }
    )

    return response.json()

  */


  // Temporary mock response

  return {

    id: "1",

    name:
      data.role === "STUDENT"
        ? "Student User"
        : data.role === "STAFF"
        ? "Staff User"
        : "Admin User",

    email: data.email,

    role: data.role,

  };

}




// SIGNUP

export async function signupUser(
  data: SignupPayload
): Promise<User> {


  /*
    Future backend API:

    POST /auth/signup

  */


  return {

    id: Date.now().toString(),

    name: data.name,

    email: data.email,

    role: data.role,

  };

}




// LOGOUT

export async function logoutUser() {

  /*
    Future:

    await fetch("/auth/logout")

  */

  return true;

}