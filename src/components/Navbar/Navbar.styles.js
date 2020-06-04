import styled from "styled-components";

const NavbarWrapper = styled.div`
  height: 50px;
  display: flex;
  font-family: "Archivo", sans-serif;
  justify-content: center;
  align-items: center;

  /* &:hover {
    background-color: lightcyan;
  } */
`;

const NavbarItem = styled.div`
  margin-right: 60px;
  cursor: pointer;
`;

export { NavbarWrapper, NavbarItem };
