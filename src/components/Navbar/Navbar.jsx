import React from "react";
import { NavbarWrapper, NavbarItem } from "./Navbar.styles";
import Link from "next/link";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link href="/about">
        <NavbarItem>About</NavbarItem>
      </Link>
      <NavbarItem>Work</NavbarItem>
      <NavbarItem>Skills</NavbarItem>
      <NavbarItem>Contacts</NavbarItem>
    </NavbarWrapper>
  );
};

export default Navbar;
