"use client";
// components or pages where LoginPage is defined
import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { LoginAPI } from "./action";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post("/api/login", {
  //       email,
  //       password,
  //     });
  //     console.log("Login successful:", response.data);
  //     // Handle login success (e.g., redirect, store token)
  //   } catch (error: any) {
  //     console.error("Login failed:", error.response?.data || error.message);
  //     // Handle login error (e.g., display error message)
  //   }
  // };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="w-full max-w-sm" action={LoginAPI}>
        <div className="mb-4">
          <Input
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
        </div>
        <div className="mb-6">
          <Input
            type="password"
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            name="password"
          />
        </div>
        <div className="flex items-center justify-between">
          <Button type="submit" size="lg">
            로그인
          </Button>
        </div>
      </form>
    </div>
  );
}
