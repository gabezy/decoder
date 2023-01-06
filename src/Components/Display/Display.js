import React from "react";
import { AppContext } from "../../AppContext";
import styled from "styled-components";
import DisplayNoText from "./DisplayNoText";
import DisplayText from "./DisplayText";

const WrapperMain = styled.div`
  display: grid;
  background: #fff;
  border-radius: 1rem;
  img {
    margin: auto;
  }
`;
const Display = () => {
  const { textToCode } = React.useContext(AppContext);

  return (
    <WrapperMain>
      {textToCode ? <DisplayText text={textToCode} /> : <DisplayNoText />}
    </WrapperMain>
  );
};

export default Display;
