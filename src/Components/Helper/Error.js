import React from "react";
import styled from "styled-components";

const ErrorText = styled.p`
  color: #f44336 !important;
  font-size: 1rem !important;
`;

const Error = ({ error }) => {
  if (!error) return null;
  return <ErrorText>{error}</ErrorText>;
};

export default Error;
