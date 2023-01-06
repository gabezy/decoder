import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../Assets/logo.svg";

const HeaderS = styled.header`
  @media (min-width: 800px) {
    grid-column: 1/ 3;
  }
`;

const Nav = styled.nav`
  margin-top: 1rem;
  div {
    cursor: pointer;
    padding: 0.5rem;
  }
`;

const Header = () => {
  return (
    <HeaderS>
      <Nav>
        <div onClick={() => window.location.reload()}>
          <Logo />
        </div>
      </Nav>
    </HeaderS>
  );
};

export default Header;
