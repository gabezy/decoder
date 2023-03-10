import React from "react";
import styled from "styled-components";

const ButtonS = styled.button`
  width: ${(props) => (props.width ? props.width : "100%")};
  padding-block: 1.3rem;
  font-size: 1rem;
  border-radius: 1.2rem;
  margin-bottom: 1.2rem;
  text-transform: capitalize;
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  background: ${(props) => props.bg};
  transition: background 0.5s;
  cursor: pointer;
  :disabled {
    background: #7f8c8d;
    color: #000;
    border: none;
  }
`;

const Button = ({ children, border, color, bg, ...props }) => {
  return (
    <ButtonS border={border} color={color} bg={bg} {...props}>
      {children}
    </ButtonS>
  );
};

export default Button;
