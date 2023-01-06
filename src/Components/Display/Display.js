import React from "react";
import { AppContext } from "../../AppContext";
import styled from "styled-components";
import DisplayNoText from "./DisplayNoText";
import DisplayText from "./DisplayText";
import { device } from "../Helper/MediaSize";

const Wrapper = styled.div`
  @media ${device.desktop} {
    grid-row: 1/3;
  }
  display: grid;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0px 24px 32px -8px rgba(0, 0, 0, 0.08);
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
