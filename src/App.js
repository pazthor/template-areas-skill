import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <>
      <BrowserRouter basename="/area">
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
