// App.js
import React from "react";
import Header from "./components/Header";
import Article from "./components/Article";
import { Reset } from "styled-reset";

function App() {
  return (
    <>
      <Reset />
      <div className="root">
        <Header />
        <div className="main"></div>
        <Article />
        <Article />
        <Article />
      </div>
    </>
  );
}

export default App;
