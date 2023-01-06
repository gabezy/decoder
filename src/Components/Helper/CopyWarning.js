import React from "react";
import styled, { keyframes } from "styled-components";

const effect = keyframes`
  to {
    opacity: initial
  }
`;

const Wrapper = styled.div`
  max-width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  margin: 0 auto;
  position: absolute;
  top: 2rem;
  left: 0;
  right: 0;
  background: #e9ecf8;
  z-index: 1000;
  opacity: 0;
  animation: ${effect} 1s forwards;
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
