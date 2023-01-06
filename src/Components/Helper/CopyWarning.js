import React from "react";
import styled, { keyframes } from "styled-components";

const effect = keyframes`
  to {
    opacity: initial;
    transform: translateY(50px)
  }
`;

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-width: 300px;
  height: 200px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 1rem;
  background: #e9ecf8;
  z-index: 1000;
  opacity: 0;
  animation: ${effect} 0.5s forwards;
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.5;
  padding: 0 0.5rem;
  border: 2px solid #0a3871;
  /* box-shadow: 0 0 0 3px #0a3871; */
  * {
    font-size: inherit;
  }
`;

const CopyWarning = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CopyWarning;
