import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import React from "react";

const Navigation = () => {
  return (
    <>
      <Navbar position="static">
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-xl">취Up하자</p>
          </Link>
        </NavbarBrand>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button variant="bordered" color="primary">
              <Link href="/login">로그인</Link>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Navigation;
