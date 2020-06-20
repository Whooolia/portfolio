import React from "react";
import { NavbarWrapper, NavbarItem } from "./Navbar.styles";
import Link from "next/link";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link href="/">
        <NavbarItem>Home</NavbarItem>
      </Link>
      <Link href="/work">
        <NavbarItem>Work</NavbarItem>
      </Link>
      <NavbarItem>Skills</NavbarItem>
      <NavbarItem>Contacts</NavbarItem>
    </NavbarWrapper>
  );
};

export default Navbar;
