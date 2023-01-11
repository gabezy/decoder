import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { AppStorage } from "./AppContext";
import Display from "./Components/Display/Display";
import Footer from "./Components/Footer";
import Form from "./Components/Form/Form";
import Header from "./Components/Header";
import { device } from "./Components/Helper/MediaSize";

const GlobalStyle = createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  img {
    max-width: 100%;
    display: block;
  }
  body {
    background: #e9ecf8;
    font-family: "Inter", sans-serif;
  }
`;

const WrapperGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr) 400px;
  max-width: 1600px;
  padding: 0 1rem;
  margin: 0 auto;
  margin-bottom: 3rem;
  margin-top: 1.5rem;
  gap: 3rem 2rem;
  @media ${device.table} {
    grid-template-columns: 1fr;
  } ;
`;

function App() {
  return (
    <>
      <AppStorage>
        <GlobalStyle />
        <WrapperGrid>
          <Header />
          <Form />
          <Display />
        </WrapperGrid>
        <Footer />
      </AppStorage>
    </>
  );
}

export default App;
