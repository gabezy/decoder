import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  height: 60vh;
  background: transparent;
  outline: none;
  border: none;
  font-size: 2rem;
  line-height: 1.5;
  resize: none;
  color: #0a3871;
  padding: 1rem 2rem;
  margin-top: 0.5rem;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #0a3871;
  }
`;

const Textarea = ({ value, id, name, ...props }) => {
  return <TextArea id={id} name={name} value={value} {...props}></TextArea>;
};

export default Textarea;
