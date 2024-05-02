"use client";
import React, { MouseEvent, useState, useContext } from "react";
import {
  Button,
  Input,
  Card,
  CardBody,
  CardHeader,
  Link,
} from "@nextui-org/react";
import { LoginAPI, UserAPI } from "./action";
import { UserContext } from "../providers";
import { useRouter } from "next/navigation";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserData } = useContext(UserContext);
  const router = useRouter();

  async function handleLogin(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const loginreqinfo = JSON.stringify({
      emai: email,
      password: password,
    });
    const loginResponse = await LoginAPI(loginreqinfo);
    if (loginResponse == "로그인 성공!") {
      const userData = await UserAPI(email);
      setUserData(userData);
      if (userData[0].type === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="min-w-[400px]">
        <CardHeader className="flex items-center justify-center py-8">
          <div className="font-extrabold text-3xl text-center">로그인</div>
        </CardHeader>
        <CardBody>
          <div className="w-full max-w-sm">
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
            <div className="flex flex-col items-center justify-center gap-4">
              <Button
                onClick={(e) => handleLogin(e)}
                className="w-full"
                variant="bordered"
                color="primary"
              >
                로그인
              </Button>
              <div>
                아직 회원가입을 안하셨나요? <Link href="/signup">회원가입</Link>{" "}
                하기
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default page;
