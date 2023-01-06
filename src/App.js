import React from "react";
import { createGlobalStyle } from "styled-components";
import { AppStorage } from "./AppContext";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";

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
    background: #F3F5FC;
    font-family: "Inter", sans-serif;
  }
`;

function App() {
  return (
    <>
      <AppStorage>
        <GlobalStyle />
        <Header />
        <Home />
        <Footer />
      </AppStorage>
    </>
  );
}

export default App;
