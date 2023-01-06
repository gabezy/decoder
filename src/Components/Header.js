import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../Assets/logo.svg";

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 1rem;
  div {
    cursor: pointer;
    padding: 0.5rem;
  }
`;

const Header = () => {
  return (
    <header>
      <Nav>
        <div onClick={() => window.location.reload()}>
          <Logo />
        </div>
      </Nav>
    </header>
  );
};

export default Header;
