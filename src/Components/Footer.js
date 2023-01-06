import React from "react";
import styled from "styled-components";
import { device } from "./Helper/MediaSize";

const WrapperFooter = styled.footer`
  width: 100%;
  background: #0a3871;
  @media ${device.desktop} {
    position: absolute;
    bottom: 0px;
  }
`;

//https://cdn.jsdelivr.net/npm/simple-icons@8.2.0/icons/github.svg

//https://cdn.jsdelivr.net/npm/simple-icons@8.2.0/icons/linkedin.svg

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 0.5rem;
  gap: 1rem;
`;

const Footer = () => {
  return (
    <WrapperFooter>
      <Wrapper>
        <p>Made by Gabezy</p>
      </Wrapper>
    </WrapperFooter>
  );
};

export default Footer;
