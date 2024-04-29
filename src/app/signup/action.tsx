"use server";
import { redirect } from "next/navigation";

export async function SignupAPI(formData: FormData) {
  const API_URL = process.env.API_URL;
  //console.log(API_URL);

  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");
  const birthday = formData.get("birthday");
  const gpa = formData.get("gpa");
  const totalGpa = formData.get("totalGpa");
  const school = formData.get("school");
  //console.log(formData);

  const memberReqInfo = JSON.stringify({
    email: email,
    password: password,
    name: name,
    birthday: birthday,
    gpa: `${gpa}/${totalGpa}`,
    school: school,
  });

  // Create a Blob object with the JSON content type
  const blob = new Blob([memberReqInfo], { type: "application/json" });

  const newFormData = new FormData();
  newFormData.append("MemberReqInfo", blob);

  try {
    const response = await fetch(`${API_URL}/api/member`, {
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
  redirect("/login");
}
