import styled from "styled-components";
import CircleCursor from "../Cursor/Cursor.styles";

const NavbarWrapper = styled.div`
  height: 50px;
  display: flex;
  font-family: "Archivo", sans-serif;
  justify-content: center;
  align-items: center;
`;

const NavbarItem = styled.div`
  margin-right: 60px;
  &:hover {
    ${CircleCursor} {
      background-color: black;
    }
  }
`;

export { NavbarWrapper, NavbarItem };
