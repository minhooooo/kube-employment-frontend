"use server";

export async function getJobList() {
  const API_URL = process.env.API_URL;
  const res = await fetch(`${API_URL}/api/job`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const jobList = res.json();
  //console.log(jobList);
  return jobList;
}
