import React from "react";
import styled from "styled-components";
import { AppContext } from "../../AppContext";
import Error from "../Helper/Error";
import Button from "./Button";
import Textarea from "./Textarea";

const FormS = styled.form`
  grid-row: 2;
  grid-column: 1 / 3;
  display: grid;
  p {
    color: #495057;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 0.7rem;
    padding-left: 5px;
  }
`;
const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Form = () => {
  const [text, setText] = React.useState("");
  const { setTextToCode, error, encrypt, decrypt } =
    React.useContext(AppContext);

  const handleEncryption = () => {
    const encryptText = encrypt(text);
    if (encrypt) {
      setTextToCode(encryptText);
      setText("");
      document.querySelector("textarea").focus();
    }
  };

  const handleDecryption = () => {
    const decryptText = decrypt(text);
    if (decryptText) {
      setTextToCode(decrypt);
      setText("");
      document.querySelector("textarea").focus();
    }
  };

  return (
    <FormS onSubmit={(event) => event.preventDefault()}>
      <Textarea
        id="text"
        name="text"
        value={text}
        placeholder="Digite um Texto..."
        onChange={({ target }) => setText(target.value)}
      />
      <p>🛈 Apenas letras minúsculas e sem acento.</p>
      {error && <Error error={error} />}
      <Fieldset>
        <Button
          bg="#0A3871"
          color="#fff"
          border="none"
          onClick={handleEncryption}
        >
          Criptografar
        </Button>
        <Button
          bg="transparent"
          color="#0A3871"
          border="1px solid #0A3871"
          onClick={handleDecryption}
        >
          Descriptografar
        </Button>
      </Fieldset>
    </FormS>
  );
};

export default Form;
