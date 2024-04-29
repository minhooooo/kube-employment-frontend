"use client";
import React, { useState } from "react";
import { Button, Input, Card, CardHeader, CardBody } from "@nextui-org/react";
import { SignupAPI } from "./action";

const page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [gpa, setGPA] = useState<string>("");
  const [totalGpa, setTotalGPA] = useState<string>("");
  const [school, setSchool] = useState<string>("");

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="min-w-[400px]">
        <CardHeader className="flex items-center justify-center py-8">
          <div className="font-extrabold text-3xl text-center">회원가입</div>
        </CardHeader>
        <CardBody>
          <form className="w-full max-w-sm" action={SignupAPI}>
            <div className="mb-4 flex flex-col gap-3">
              <Input
                fullWidth
                variant="bordered"
                size="lg"
                type="email"
                label="이메일"
                placeholder="이메일 입력"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                variant="bordered"
                fullWidth
                size="lg"
                label="비밀번호"
                placeholder="비밀번호 입력"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                fullWidth
                variant="bordered"
                size="lg"
                label="이름"
                placeholder="이름 입력"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="date"
                fullWidth
                variant="bordered"
                size="lg"
                label="생년월일"
                name="birthday"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
              <div className="flex flex-row gap-3">
                <Input
                  fullWidth
                  variant="bordered"
                  size="lg"
                  label="학점"
                  placeholder="학점"
                  name="gpal"
                  value={gpa}
                  onChange={(e) => setGPA(e.target.value)}
                />

                <Input
                  fullWidth
                  variant="bordered"
                  size="lg"
                  label="총학점"
                  placeholder="총학점"
                  name="totalGpa"
                  value={totalGpa}
                  onChange={(e) => setTotalGPA(e.target.value)}
                />
              </div>
              <Input
                fullWidth
                variant="bordered"
                size="lg"
                label="학교"
                placeholder="학교 이름 입력"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <Button
                type="submit"
                className="w-full"
                variant="bordered"
                color="primary"
              >
                회원가입
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default page;
