"use client";
import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { LoginAPI } from "./action";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
};

export default page;
