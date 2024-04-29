"use client";
import React, { useState } from "react";
import { Button, Input, Card, CardBody, CardHeader } from "@nextui-org/react";
import { LoginAPI } from "./action";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="min-w-[400px]">
        <CardHeader className="flex items-center justify-center py-8">
          <div className="font-extrabold text-3xl text-center">로그인</div>
        </CardHeader>
        <CardBody>
          <form className="w-full max-w-sm" action={LoginAPI}>
            <div className="mb-4">
              <Input
                fullWidth
                color="primary"
                size="lg"
                label="이메일"
                placeholder="이메일 입력"
                variant="bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
            </div>
            <div className="mb-6">
              <Input
                type="password"
                variant="bordered"
                fullWidth
                color="primary"
                size="lg"
                label="비밀번호"
                placeholder="비밀번호 입력"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                name="password"
              />
            </div>
            <div className="flex items-center justify-center">
              <Button
                type="submit"
                className="w-full"
                variant="bordered"
                color="primary"
              >
                로그인
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default page;
