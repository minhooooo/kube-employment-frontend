import React from "react";

export default function Home() {
  function showURL() {
    return process.env.API_URL;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p>시작화면 어떻게 할까?</p>
      <p>AWS URL = http://13.124.213.82:8080</p>
      <p>Server Side URL</p>
      <p>{showURL()}</p>
    </div>
  );
}
