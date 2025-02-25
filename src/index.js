import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ModalProvider } from "./context/ModalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
{/* Обернула App */}
  <ModalProvider>
    <App />
  </ModalProvider>
  </BrowserRouter>
  </Provider>
);

