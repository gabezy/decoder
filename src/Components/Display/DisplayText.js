import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";
import Button from "../Form/Button";
import CopyWarning from "../Helper/CopyWarning";

const Wrapper = styled.ul`
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 0 1rem;
  button {
    justify-self: center;
  }
`;

const Text = styled.li`
  font-size: 1.3rem;
  word-break: break-word;
  margin-top: 1rem;
  padding-top: 1rem;
  height: 80%;
`;

const DisplayText = ({ text }) => {
  const [textCopied, setTextCopied] = React.useState(false);

  const handleClick = () => {
    setTextCopied(false);
    setTextCopied(true);
    const interval = setInterval(() => {
      setTextCopied(false);
    }, 2 * 1000);
    return clearInterval(interval);
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
