// App.js
import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Article from "./components/Article";
import { Reset } from "styled-reset";

function App() {
  return (
    <>
      <Reset />
      <div className="root">
        <Header />
        <MainStyle className="main">
          <Article />
          <Article />
          <Article />
        </MainStyle>
      </div>
    </>
  );
}

const MainStyle = styled.main`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 4rem);
  margin: 20px auto 0;
  padding: 2rem;
  article {
    width: 30%;
  }
  &.active {
    background: red;
  }
`;

export default App;
