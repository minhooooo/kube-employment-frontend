"use server";
import { redirect } from "next/navigation";

export async function LoginAPI(formData: FormData) {
  const API_URL = process.env.API_URL;
  let responseData;

  const email = formData.get("email");
  const password = formData.get("password");

  const loginReqInfo = JSON.stringify({
    email: email,
    password: password,
  });

  const blob = new Blob([loginReqInfo], { type: "application/json" });

  const newFormData = new FormData();
  newFormData.append("LoginReqInfo", blob);

  try {
    const response = await fetch(`${API_URL}/api/member/login`, {
      method: "POST",
      body: newFormData,
    });

    responseData = await response.text();
    console.log(`responseData: ${responseData}`);
  } catch (error) {
    console.error("Error:", error);
  }
  if (responseData == "로그인 성공!") {
    redirect("/");
  }
}
