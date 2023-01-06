import React from "react";
import styled from "styled-components";
import Display from "./Display/Display";
import Form from "./Form/Form";

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0.5rem;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
`;

const Home = () => {
  return (
    <Wrapper>
      <Form />
      <Display />
    </Wrapper>
  );
};

export default Home;
