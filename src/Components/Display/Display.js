import React from "react";
import { AppContext } from "../../AppContext";
import styled from "styled-components";
import DisplayNoText from "./DisplayNoText";
import DisplayText from "./DisplayText";

const Wrapper = styled.div`
  display: grid;
  grid-row: 1/3;
  background: #fff;
  border-radius: 1rem;
  img {
    margin: auto;
  }
`;
const Display = () => {
  const { textToCode } = React.useContext(AppContext);

  return (
    <Wrapper>
      {textToCode ? <DisplayText text={textToCode} /> : <DisplayNoText />}
    </Wrapper>
  );
};

export default Display;
