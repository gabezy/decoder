import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";
import Button from "../Form/Button";
import CopyWarning from "../Helper/CopyWarning";
import { device } from "../Helper/MediaSize";

const Wrapper = styled.ul`
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 0 1rem;
  button {
    justify-self: center;
  }
`;

const Text = styled.li`
  color: #495057;
  line-height: 1.4;
  text-align: left;
  font-size: 1.3rem;
  word-break: break-word;
  margin-top: 1rem;
  padding-top: 1rem;
  height: 80%;
  @media ${device.table} {
    min-height: 20vh;
    margin-bottom: 2rem;
  }
`;

const DisplayText = ({ text }) => {
  const [textCopied, setTextCopied] = React.useState(false);
  let timeoutId;

  const timeoutWarning = () => {
    timeoutId = setTimeout(() => {
      setTextCopied(false);
    }, 1500);
  };

  const handleClick = () => {
    clearInterval(timeoutId);
    setTextCopied(true);
    timeoutWarning();
  };

  return (
    <Wrapper>
      {textCopied && (
        <CopyWarning>Texto copiado para área de transferência</CopyWarning>
      )}
      <Text>{text}</Text>
      <CopyToClipboard text={text}>
        <Button
          border="1px solid #0A3871"
          color="#0A3871"
          bg="#fff"
          width="70%"
          onClick={handleClick}
        >
          Copiar
        </Button>
      </CopyToClipboard>
    </Wrapper>
  );
};

export default DisplayText;
