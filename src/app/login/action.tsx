"use server";
import { redirect } from "next/navigation";

export async function LoginAPI(formData: FormData) {
  const API_URL = process.env.API_URL;
  //console.log(API_URL);

  const email = formData.get("email");
  const password = formData.get("password");
  //console.log(formData);

  const loginReqInfo = JSON.stringify({
    email: email,
    password: password,
  });

  // Create a Blob object with the JSON content type
  const blob = new Blob([loginReqInfo], { type: "application/json" });

  const newFormData = new FormData();
  newFormData.append("LoginReqInfo", blob);

  try {
    const response = await fetch(`${API_URL}/api/member/login`, {
      method: "POST",
      body: newFormData,
      // No headers should be manually set, let the browser handle it
    });

    // Handle response
    const responseData = await response.text();
    console.log(responseData);
  } catch (error) {
    // Handle error
    console.error("Error:", error);
  }
  redirect("/");
}
