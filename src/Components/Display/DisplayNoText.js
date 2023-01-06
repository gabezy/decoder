import React from "react";
import img from "../../Assets/img.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
`;

const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    color: #495057;
    line-height: 1.6;
    font-size: 1rem;
    max-width: 30ch;
    text-align: center;
    margin-inline: auto;
  }
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  max-width: 20ch;
  line-height: 1.1;
  margin-inline: auto;
  text-align: center;
  color: #343a40;
`;

const DisplayNoText = () => {
  return (
    <Wrapper>
      <img src={img} alt="Pessoa olhando um diamante" />
      <WrapperText>
        <Title>Nenhuma mensagem encontrada</Title>
        <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
      </WrapperText>
    </Wrapper>
  );
};

export default DisplayNoText;
