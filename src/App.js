import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import Routes from "./Routes";

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter basename="/area">
        <Routes />
      </BrowserRouter>
      </Provider>,
    </>
  );
}

export default App;
