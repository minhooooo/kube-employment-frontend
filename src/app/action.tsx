"use server";
import axios from "axios";
interface ILogin {
  email: string;
  password: string;
  formData: any;
}
export async function LoginAPI(formData: FormData) {
  const API_URL = process.env.API_URL;
  console.log(API_URL);
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    // const response = await axios.post(`${process.env.API_URL}/api/login`, {
    //   email,
    //   password,
    // });
    const response = await axios.get(`${process.env.API_URL}/api/apply`);
    console.log("Login successful:", response.data);
    // Handle successful login here (e.g., redirecting the user)
  } catch (error) {
    console.error("Login failed:", error);
    // Handle errors here (e.g., showing error messages)
  }
}
